import { defineStore } from 'pinia'
import type { Item } from '@/types/item'
import type { Recipe } from '@/types/recipe'
import axios from 'axios'
import type { Building } from '@/types/building'
import type { RecipeItem } from '@/types/recipeItem'
import type { Resource } from '@/types/resource'
import type { Miner } from '@/types/miner'

export const useDataStore = defineStore('data', () => {
  const recipes = ref<Recipe[]>([])
  const items = ref<Item[]>([])
  const buildings = ref<Building[]>([])
  const resources = ref<Resource[]>([])
  const miners = ref<Miner[]>([])

  const loading = ref(false)
  const isLoaded = ref(false)

  const getData = async () => {
    if (isLoaded.value) {
      return
    }
    loading.value = true
    try {
      const response = await axios.get('/satisfactory-calculator/data.json')
      const data = response.data

      preprocessItems(data.items, data.resources)
      preprocessBuildings(data.buildings)
      preprocessRecipes(data.recipes)
      preprocessResources(data.resources)
      preprocessMiners(data.miners)
      isLoaded.value = true
    } finally {
      loading.value = false
      // console.log(items)
      // console.log(recipes)
      // console.log(buildings)
    }
  }

  const preprocessItems = (rawItems: Record<string, Item>, rawResources: Record<string, Resource>) => {
    Object.entries(rawItems).forEach(([, item]) => {
      const isResource = rawResources[item.className] !== null
      items.value.push({
        ...item,
        isResource,
      })
    })
  }

  const preprocessBuildings = (rawBuildings: Record<string, Building>) => {
    Object.entries(rawBuildings).forEach(([, building]) => {
      buildings.value.push(building)
    })
  }

  const preprocessRecipes = (rawRecipes: Record<string, Recipe>) => {
    Object.entries(rawRecipes).forEach(([, recipe]) => {
      const producedInBuildings: Building[] = recipe.producedIn.map(buildingClassName => getBuildingByClassName(buildingClassName) as Building)
      const ingredientItems: RecipeItem[] = recipe.ingredients.map(itemAmount => ({ item: getItemByClassName(itemAmount.item) as Item, amount: itemAmount.amount }))
      const producedItems: RecipeItem[] = recipe.products.map(itemAmount => ({ item: getItemByClassName(itemAmount.item) as Item, amount: itemAmount.amount }))
      recipes.value.push({
        ...recipe,
        producedInBuildings,
        ingredientItems,
        producedItems,
      })
    })
  }

  const preprocessResources = (rawResources: Record<string, Resource>) => {
    Object.entries(rawResources).forEach(([, resource]) => {
      const resourceItem: Item = getItemByClassName(resource.item) as Item
      resources.value.push({
        ...resource,
        resourceItem,
      })
    })
  }

  const preprocessMiners = (rawMiners: Record<string, Miner>) => {
    Object.entries(rawMiners).forEach(([, miner]) => {
      const allowedResourceItems: Resource[] = miner.allowedResources.map(allowedResource => getResourceByClassName(allowedResource) as Resource)
      miners.value.push({
        ...miner,
        allowedResourceItems,
      })
    })
  }

  const getRecipeBySlug = (slug: string): Recipe | null => {
    return recipes.value.find(r => r.slug === slug) ?? null
  }

  const getItemByClassName = (className: string): Item | null => {
    return items.value.find(i => i.className === className) ?? null
  }

  const getItemBySlug = (slug: string): Item | null => {
    return items.value.find(i => i.slug === slug) ?? null
  }

  const getBuildingByClassName = (className: string): Building | null => {
    return buildings.value.find(b => b.className === className) ?? null
  }

  const getBuildingBySlug = (slug: string): Building | null => {
    return buildings.value.find(b => b.slug === slug) ?? null
  }

  const getBaseItemRecipes = (): Recipe[] => {
    return recipes.value.filter(r => !r.alternate && r.inMachine)
  }

  const getResourceByClassName = (className: string): Resource | null => {
    return resources.value.find(r => r.item === className) ?? null
  }

  const getItems = (): Item[] => {
    return items.value
  }

  return {
    getData,
    getRecipeBySlug,
    getItemBySlug,
    getBuildingBySlug,
    getBaseItemRecipes,
    getItems,
  }
})
