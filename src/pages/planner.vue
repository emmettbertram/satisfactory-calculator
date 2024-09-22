<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card class="ma-1">
          <v-card-title>
            Select outputs
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="recipe in recipes" :key="recipe.id">
                <template #default>
                  <v-row class="d-flex justify-center align-center">
                    <v-col cols="3">
                      <v-autocomplete
                        v-model="recipe.recipe"
                        auto-select-first
                        clearable
                        item-title="name"
                        :items="recipeOptions"
                        label="Output"
                        return-object
                      />
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        v-model="recipe.amount"
                        type="number"
                      />
                    </v-col>
                    <v-col cols="3">
                      <v-btn @click="removeSelectedRecipe(recipe.id)">
                        Remove
                      </v-btn>
                    </v-col>
                  </v-row>
                </template>
              </v-list-item>
            </v-list>
            <v-btn @click="addEmptyRecipe">
              Add output
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="generateFactoryPlan()">
              Generate Plan
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex fill-height" cols="12">
        <v-card class="ma-1">
          <v-card-title>Plan</v-card-title>
          <v-card-text>
            <div class="vue-flow-container" style="height: 400px; width: 1200px;">
              <FactoryGraph v-if="factoryPlan" class="fill-space" :factory="factoryPlan" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import FactoryGraph from '@/components/FactoryGraph.vue'
  import { useDataStore } from '@/stores/data'
  import { type FactoryPlan } from '@/types/factoryPlan'
  import type { Recipe } from '@/types/recipe'
  import { generateFactorySteps } from '@/services/factoryPlanner'
  import type { RecipeAmountPerMinute } from '@/types/recipeAmountPerMinute'

  interface RecipeWithAmount {
    recipe: Recipe | null,
    amount: number | null,
    id: number,
  }

  export default defineComponent({
    components: {
      FactoryGraph,
    },
    setup() {
      const dataStore = useDataStore()
      return { dataStore }
    },
    data() {
      return {
        recipeOptions: [] as Recipe[],
        recipes: [] as RecipeWithAmount[],
        recipeIdCounter: 0,
        factoryPlan: null as FactoryPlan | null,
      }
    },
    computed: {
    },
    async mounted() {
      await this.dataStore.getData()
      this.recipeOptions = this.dataStore.getBaseItemRecipes()
      // this.factoryPlan = this.createDummyFactoryPlan()
    },
    methods: {
      createRecipeWithAmount(recipe: Recipe | null, amount: number | null, id: number): RecipeWithAmount {
        return {
          recipe,
          amount,
          id,
        }
      },
      addEmptyRecipe() {
        this.recipes.push(this.createRecipeWithAmount(null, null, this.recipeIdCounter))
        this.recipeIdCounter += 1
      },
      removeSelectedRecipe(recipeId: number) {
        this.recipes = this.recipes.filter(r => r.id !== recipeId)
      },
      generateFactoryPlan() {
        const chosenRecipes: RecipeAmountPerMinute[] = []
        this.recipes.forEach(recipe => {
          if (recipe.amount && recipe.recipe) {
            chosenRecipes.push({ recipe: recipe.recipe, amountPerMinute: recipe.amount })
          }
        })
        const steps = generateFactorySteps(chosenRecipes)
        this.factoryPlan = {
          steps,
        }
        // if (this.recipes.length > 0) {
        //   const desiredRecipe = this.recipes[0]
        //   if (desiredRecipe.amount && desiredRecipe.recipe) {
        //     const steps = generateFactorySteps(desiredRecipe.recipe.slug, desiredRecipe.amount)
        //     this.factoryPlan = {
        //       steps,
        //     }
        //     // printFactoryPlan(this.factoryPlan)
        //   }
        // }
      },
    },
  })
</script>

<style>
.vue-flow-container {
  height: 95%;
  width: 95%;
  border: 2px solid black;
}
.fill-space {
  width: 100%;
  height: 100%;
}
</style>
