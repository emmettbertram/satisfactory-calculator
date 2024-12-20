import { useDataStore } from '@/stores/data'
import type { Building } from '@/types/building'
import type { FactoryPlan } from '@/types/factoryPlan'
import type { FactoryStep } from '@/types/factoryStep'
import type { Item } from '@/types/item'
import type { Recipe } from '@/types/recipe'
import type { RecipeAmountPerMinute } from '@/types/recipeAmountPerMinute'
import { v4 as uuidv4 } from 'uuid'

export const generateFactorySteps = (recipes: RecipeAmountPerMinute[]): FactoryStep[] => {
  const dataStore = useDataStore()
  const finalProducts: Item[] = recipes.flatMap(recipeAmountPerMinute => recipeAmountPerMinute.recipe.producedItems.map(producedItem => producedItem.item))
  const factorySteps: FactoryStep[] = []
  const queue: { recipe: Recipe, amountPerMinute: number, parentStepId?: string }[] = recipes.map(recipeAmountPerMinute => {
    return {
      recipe: recipeAmountPerMinute.recipe,
      amountPerMinute: recipeAmountPerMinute.amountPerMinute,
    }
  })
  while (queue.length > 0) {
    const { recipe, amountPerMinute, parentStepId } = queue.shift()!
    const cyclesPerMinute = 60 / recipe.time
    const primaryProductRatePerMachine = cyclesPerMinute * recipe.producedItems[0].amount
    const numberOfMachines = amountPerMinute / primaryProductRatePerMachine

    const existingFactoryStep: FactoryStep | null = getExistingStep(factorySteps, recipe.producedInBuildings[0], recipe)
    if (existingFactoryStep) {
      recipe.producedItems.forEach(product => {
        const existingOutput = existingFactoryStep.outputs.find(output => output.item.slug === product.item.slug)
        if (existingOutput) {
          existingOutput.amountPerMinute += amountPerMinute
        }
      })

      recipe.ingredientItems.forEach(ingredient => {
        const ingredientAmountPerMinute = ingredient.amount * cyclesPerMinute * numberOfMachines
        const existingInput = existingFactoryStep.inputs.find(input => input.item.slug === ingredient.item.slug)
        if (existingInput) {
          existingInput.amountPerMinute += ingredientAmountPerMinute
        }
        const ingredientRecipe = dataStore.getRecipeByName(ingredient.item.name)
        if (ingredientRecipe) {
          queue.push({
            recipe: ingredientRecipe,
            amountPerMinute: ingredientAmountPerMinute,
            parentStepId: existingFactoryStep.id,
          })
        }
      })

      existingFactoryStep.numberOfBuildings += numberOfMachines
      if (parentStepId) {
        const parentStep = factorySteps.find(step => step.id === parentStepId)
        if (parentStep && !parentStep.nextSteps.includes(existingFactoryStep.id)) {
          parentStep.nextSteps.push(existingFactoryStep.id)
        }
      }
    } else {
      const factoryStep: FactoryStep = {
        id: uuidv4(),
        inputs: [],
        outputs: [],
        building: recipe.producedInBuildings[0],
        nextSteps: [],
        isStartingStep: false,
        isFinalStep: false,
        isResourceStep: false,
        isFinalProductStep: false,
        numberOfBuildings: numberOfMachines,
      }
      recipe.ingredientItems.forEach(ingredient => {
        const ingredientAmountPerMinute = ingredient.amount * cyclesPerMinute * numberOfMachines
        factoryStep.inputs.push({
          ...ingredient,
          amountPerMinute: ingredientAmountPerMinute,
        })

        const inputRecipe = dataStore.getRecipeByName(ingredient.item.name)
        if (inputRecipe) {
          queue.push({
            recipe: inputRecipe,
            amountPerMinute: ingredientAmountPerMinute,
            parentStepId: factoryStep.id,
          })
          factoryStep.isStartingStep = false
        } else {
          factoryStep.isStartingStep = true
        }
      })
      recipe.producedItems.forEach(product => {
        const outputAmountPerMinute = product.amount * cyclesPerMinute * numberOfMachines
        factoryStep.outputs.push({
          ...product,
          amountPerMinute: outputAmountPerMinute,
        })
        if (finalProducts.some(finalProduct => finalProduct.slug === product.item.slug)) {
          factoryStep.isFinalStep = true
        }
      })
      if (parentStepId) {
        const parentStep = factorySteps.find(step => step.id === parentStepId)
        if (parentStep) {
          parentStep.nextSteps.push(factoryStep.id)
        }
      }
      factorySteps.push(factoryStep)
    }
  }

  const resourceSteps: FactoryStep[] = []
  factorySteps.filter(step => step.isStartingStep).forEach(step => {
    step.inputs.filter(input => input.item.isResource).forEach(startingItem => {
      const existingStartingStep = resourceSteps.find(resourceStep => resourceStep.outputs.some(output => output.item.slug === startingItem.item.slug))
      if (existingStartingStep) {
        existingStartingStep.outputs[0].amountPerMinute += startingItem.amountPerMinute
        step.nextSteps.push(existingStartingStep.id)
      } else {
        const resourceStep: FactoryStep = {
          id: uuidv4(),
          inputs: [],
          outputs: [startingItem],
          building: null,
          nextSteps: [],
          isStartingStep: false,
          isFinalStep: false,
          isResourceStep: true,
          isFinalProductStep: false,
          numberOfBuildings: 0,
        }
        step.nextSteps.push(resourceStep.id)
        resourceSteps.push(resourceStep)
      }
    })
  })
  const finalProductSteps: FactoryStep[] = []
  factorySteps.filter(step => step.isFinalStep).forEach(step => {
    step.outputs.forEach(finalItem => {
      const stepsUsingThisFinalItem = factorySteps.filter(factoryStep => factoryStep.nextSteps.some(nextStep => nextStep === step.id))
      const finalItemAmountAlreadyConsumed = stepsUsingThisFinalItem.reduce((acc, step) => acc + (step.inputs.find(input => input.item.slug === finalItem.item.slug)?.amountPerMinute ?? 0), 0)
      const existingFinalProductStep = finalProductSteps.find(finalProductStep => finalProductStep.inputs.some(input => input.item.slug === finalItem.item.slug))
      if (existingFinalProductStep) {
        existingFinalProductStep.inputs[0].amountPerMinute += finalItem.amountPerMinute - finalItemAmountAlreadyConsumed
        existingFinalProductStep.nextSteps.push(step.id)
      } else {
        const finalProductStep: FactoryStep = {
          id: uuidv4(),
          inputs: [],
          outputs: [],
          building: null,
          nextSteps: [step.id],
          isStartingStep: false,
          isFinalStep: false,
          isResourceStep: false,
          isFinalProductStep: true,
          numberOfBuildings: 0,
        }
        finalProductStep.inputs.push({ item: finalItem.item, amountPerMinute: finalItem.amountPerMinute - finalItemAmountAlreadyConsumed })
        finalProductSteps.push(finalProductStep)
      }
    })
  })
  return factorySteps.concat(resourceSteps).concat(finalProductSteps)
}

const getExistingStep = (factorySteps: FactoryStep[], building: Building, recipe: Recipe): FactoryStep | null => {
  return factorySteps.find(step =>
    step.building?.slug === building.slug &&
    recipe.ingredientItems.every(ingredient => step.inputs.some(existingInput => existingInput.item.slug === ingredient.item.slug)) &&
    recipe.producedItems.every(product => step.outputs.some(existingOutput => existingOutput.item.slug === product.item.slug)),
  ) ?? null
}

export const printFactoryPlan = (factoryPlan : FactoryPlan): void => {
  factoryPlan.steps.forEach((step, index) => {
    console.log(`Step ${index}:`)
    printFactoryStep(step)
  })
}

export const printFactoryStep = (factoryStep: FactoryStep): void => {
  console.log(`~~~~~~~~ id: ${factoryStep.id.substring(0, 8)}`)
  console.log(`~~~~~~~~ inputs: ${factoryStep.inputs.map(s => `(${s.amountPerMinute} of ${s.item.slug})`).join(', ')}`)
  console.log(`~~~~~~~~ outputs: ${factoryStep.outputs.map(s => `(${s.amountPerMinute} of ${s.item.slug})`).join(', ')}`)
  console.log(`~~~~~~~~ building: ${factoryStep.building?.slug} (Count: ${factoryStep.numberOfBuildings})`)
  console.log(`~~~~~~~~ isStartingStep: ${factoryStep.isStartingStep}`)
  console.log(`~~~~~~~~ isFinalStep: ${factoryStep.isFinalStep}`)
  console.log(`~~~~~~~~ nextSteps: (${factoryStep.nextSteps.map(ns => ns.substring(0, 8)).join(', ')})`)
}
