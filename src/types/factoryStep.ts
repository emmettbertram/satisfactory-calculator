import type { Building } from './building'
import type { ItemAmountPerMinute } from './itemAmountPerMinute'

export interface FactoryStep {
  id: string,
  inputs: ItemAmountPerMinute[],
  outputs: ItemAmountPerMinute[],
  building: Building | null,
  nextSteps: string[],
  isStartingStep: boolean,
  isFinalStep: boolean,
  isResourceStep: boolean,
  isFinalProductStep: boolean,
  numberOfBuildings: number,
}
