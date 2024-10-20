<template>
  <VueFlow
    :edges="edges"
    :nodes="nodes"
    @nodes-initialized="computeLayoutNodes"
  >
    <template #node-factory-step="{ data }">
      <GraphNode :factory-step="data" />
    </template>
    <template #edge-factory="customEdgeProps">
      <GraphEdge
        :id="customEdgeProps.id"
        :data="customEdgeProps.data"
        :marker-end="customEdgeProps.markerEnd"
        :source-position="customEdgeProps.sourcePosition"
        :source-x="customEdgeProps.sourceX"
        :source-y="customEdgeProps.sourceY"
        :style="customEdgeProps.style"
        :target-position="customEdgeProps.targetPosition"
        :target-x="customEdgeProps.targetX"
        :target-y="customEdgeProps.targetY"
      />
    </template>
    <Background />
    <Controls
      position="top-left"
    />
    <MiniMap />
  </VueFlow>
</template>

<script lang="ts">
  import type { FactoryPlan } from '@/types/factoryPlan'
  import type { Edge, Node } from '@vue-flow/core'
  import { useVueFlow, VueFlow } from '@vue-flow/core'
  import type { PropType } from 'vue'
  import GraphNode from './GraphNode.vue'
  import { useLayout } from '@/services/graphLayout'
  import GraphEdge from './GraphEdge.vue'
  import type { ItemAmountPerMinute } from '@/types/itemAmountPerMinute'
  import { Controls } from '@vue-flow/controls'
  import { MiniMap } from '@vue-flow/minimap'
  import { Background } from '@vue-flow/background'

  export default defineComponent({
    components: {
      GraphEdge,
      GraphNode,
      Background,
      Controls,
      MiniMap,
      VueFlow,
    },
    props: {
      factory: {
        type: Object as PropType<FactoryPlan>,
        required: true,
      },
    },
    setup() {
      const { fitView, onConnect, addEdges } = useVueFlow()
      onConnect(params => addEdges([params]))
      const { graph, layout } = useLayout()
      return { fitView, graph, layout }
    },
    data() {
      return {
        nodes: [] as Node[],
        edges: [] as Edge[],
      }
    },
    watch: {
      factory: {
        handler() {
          this.constructGraph()
        },
        immediate: true,
      },
    },
    methods: {
      computeLayoutNodes() {
        this.constructEdges()
        this.nodes = this.layout(this.nodes, this.edges)
        nextTick(() => this.fitView())
      },
      constructGraph() {
        this.nodes = []
        this.edges = []
        this.factory.steps.forEach((step, index) => {
          this.nodes.push({
            id: step.id,
            type: 'factory-step',
            position: { x: 100 + 150 * index, y: 10 },
            data: step,
          })
        })
      },
      constructEdges() {
        this.edges = []
        this.factory.steps.forEach(step => {
          step.nextSteps.forEach(nextStep => {
            let edgeItem: ItemAmountPerMinute | null = null
            const nextFactoryStep = this.factory.steps.find(s => s.id === nextStep)
            if (nextFactoryStep) {
              edgeItem = step.inputs.find(input => nextFactoryStep.outputs.some(output => input.item.slug === output.item.slug)) ?? null
            }
            this.edges.push({
              id: 'e' + nextStep + '-' + step.id,
              source: nextStep,
              target: step.id,
              type: 'factory',
              data: { item: edgeItem },
            })
          })
        })
      },
    },
  })
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import '@vue-flow/controls/dist/style.css';

.left-handle {
  left: 0;
}
.right-handle {
  right: 0;
}
</style>
