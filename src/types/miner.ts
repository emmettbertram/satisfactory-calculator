import type { Resource } from './resource'

export interface Miner {
  className: string,
  allowedResources: string[],
  itemsPerCycle: number,
  extractCycleTime: number,
  allowLiquids: boolean,
  allowSolids: boolean,
  allowedResourceItems: Resource[],
}
