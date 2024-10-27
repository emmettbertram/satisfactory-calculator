<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" md="4">
        <v-card :elevation="3">
          <v-card-title>
            Resources
          </v-card-title>
          <v-card-text>
            <v-data-table
              density="compact"
              :headers="itemTableHeaders"
              hide-default-footer
              :items="resources"
              :items-per-page="-1"
              no-data-text="No items."
              :sort-by="[{ key: 'amountPerMinute', order: 'desc' }]"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" md="4">
        <v-card :elevation="3">
          <v-card-title>
            Products
          </v-card-title>
          <v-card-text>
            <v-data-table
              density="compact"
              :headers="itemTableHeaders"
              hide-default-footer
              :items="products"
              :items-per-page="-1"
              no-data-text="No items."
              :sort-by="[{ key: 'amountPerMinute', order: 'desc' }]"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" md="4">
        <v-card :elevation="3">
          <v-card-title>
            Buildings
          </v-card-title>
          <v-card-text>
            <v-data-table
              density="compact"
              :headers="buildingTableHeaders"
              hide-default-footer
              :items="buildings"
              :items-per-page="-1"
              no-data-text="No buildings."
              :sort-by="[{ key: 'amount', order: 'desc' }]"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" md="4">
        <v-card :elevation="3">
          <v-card-title>
            Power Usage
          </v-card-title>
          <v-card-text>
            {{ power }} MW
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import type { Building } from '@/types/building'
  import type { FactoryPlan } from '@/types/factoryPlan'
  import type { ItemAmountPerMinute } from '@/types/itemAmountPerMinute'

  interface BuildingAmount {
    building: Building,
    amount: number,
  }
  export default defineComponent({
    props: {
      factory: {
        type: Object as PropType<FactoryPlan>,
        required: true,
      },
    },
    data() {
      return {
        itemTableHeaders: [
          { title: 'Item', key: 'item.name' },
          { title: 'Amount Per Minute', key: 'amountPerMinute' },
        ],
        buildingTableHeaders: [
          { title: 'Building', key: 'building.name' },
          { title: 'Amount', key: 'amount' },
        ],
      }
    },
    computed: {
      resources(): ItemAmountPerMinute[] {
        return this.factory.steps.filter(step => step.isResourceStep).flatMap(step => step.outputs)
      },
      products(): ItemAmountPerMinute[] {
        return this.factory.steps.filter(step => step.isFinalProductStep).flatMap(step => step.inputs)
      },
      buildings(): BuildingAmount[] {
        return this.factory.steps.reduce<BuildingAmount[]>((acc, step) => {
          if (step.building) {
            const existingBuilding = acc.find(buildingAmount => buildingAmount.building.slug === step.building?.slug)
            if (existingBuilding) {
              existingBuilding.amount += Math.ceil(step.numberOfBuildings)
            } else {
              acc.push({
                building: step.building,
                amount: Math.ceil(step.numberOfBuildings),
              })
            }
          }
          return acc
        }, [])
      },
      power(): number {
        return this.factory.steps.reduce<number>((acc, step) => {
          if (step.building) {
            acc += step.building.metadata.powerConsumption * Math.ceil(step.numberOfBuildings)
          }
          return acc
        }, 0)
      },
    },
  })
</script>

<style scoped>

</style>
