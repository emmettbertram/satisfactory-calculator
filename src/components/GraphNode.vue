<template>
  <v-card
    :color="nodeColor"
    elevation="3"
    variant="elevated"
  >
    <v-card-title class="justify-center">
      {{ primaryOutputName }}
    </v-card-title>
    <v-card-subtitle class="justify-center">
      <div v-if="!isResourceNode && !isFinalProductNode">
        {{ numberOfMachines + " " + machineName }}
      </div>
      <div v-else>
        {{ totalResourceAmount }} / min
      </div>
    </v-card-subtitle>
  </v-card>
  <Handle
    v-if="!isResourceNode"
    class="left-handle"
    :position="positionLeft"
    type="target"
  />
  <Handle
    v-if="!isFinalProductNode"
    class="right-handle"
    :position="positionRight"
    type="source"
  />
</template>

<script lang="ts">
  import type { FactoryStep } from '@/types/factoryStep'

  import { Handle, Position } from '@vue-flow/core'
  export default defineComponent({
    components: {
      Handle,
    },
    props: {
      factoryStep: {
        type: Object as PropType<FactoryStep>,
        required: true,
      },
    },
    data() {
      return {
        positionLeft: Position.Left,
        positionRight: Position.Right,
      }
    },
    computed: {
      primaryOutputName(): string {
        if (this.isFinalProductNode) {
          return this.factoryStep.inputs[0].item.name ?? 'none'
        }
        return this.factoryStep.outputs[0].item.name ?? 'none'
      },
      numberOfMachines(): string {
        return this.displayNumber(this.factoryStep.numberOfBuildings)
      },
      machineName(): string {
        if (this.factoryStep.building) {
          return this.factoryStep.numberOfBuildings > 1 ? this.factoryStep.building.name + 's' : this.factoryStep.building.name
        } else {
          return ''
        }
      },
      isResourceNode(): boolean {
        return this.factoryStep.isResourceStep
      },
      isFinalProductNode(): boolean {
        return this.factoryStep.isFinalProductStep
      },
      totalResourceAmount(): string {
        if (this.isResourceNode) {
          let total = 0
          this.factoryStep.outputs.forEach(itemAmount => total += itemAmount.amountPerMinute)
          return this.displayNumber(total)
        } else if (this.isFinalProductNode) {
          let total = 0
          this.factoryStep.inputs.forEach(itemAmount => total += itemAmount.amountPerMinute)
          return this.displayNumber(total)
        } else {
          return ''
        }
      },
      nodeColor(): string {
        if (this.isResourceNode || this.isFinalProductNode) {
          return 'primary'
        } else {
          return ''
        }
      },
      nodeVariant(): string {
        return 'outlined'
      },
    },
    methods: {
      displayNumber(input: Number): string {
        return parseFloat(input.toFixed(3)).toString()
      },
    },
  })
</script>

<style scoped>
.v-card-title {
  position: relative;
}
</style>
