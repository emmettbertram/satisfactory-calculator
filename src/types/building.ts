import type { BuildingMetadata } from './buildingMetadata'

export interface Building {
  slug: string,
  name: string,
  description: string,
  className: string,
  categories: string[],
  metadata: BuildingMetadata,
}
