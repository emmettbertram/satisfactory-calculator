import type { ItemAmount } from './itemAmount'

export interface Schematic {
  className: string,
  name: string,
  slug: string,
  tier: number,
  cost: ItemAmount[],
  requiredSchematics: string[],
  type: string,
  time: number,
  mam: boolean,
}
