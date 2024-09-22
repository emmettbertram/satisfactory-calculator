import type { Building } from './building'
import type { ItemAmount } from './itemAmount'
import type { RecipeItem } from './recipeItem'

export interface Recipe {
  slug: string,
  className: string,
  name: string,
  alternate: boolean,
  time: number,
  manualTimeMultiplier: number,
  ingredients: ItemAmount[],
  ingredientItems: RecipeItem[],
  forBuilding: boolean,
  inMachine: boolean,
  inHand: boolean,
  inWorkshop: boolean,
  products: ItemAmount[],
  producedItems: RecipeItem[],
  producedIn: string[],
  producedInBuildings: Building[],
  isVariablePower: boolean,
}
