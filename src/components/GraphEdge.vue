<template>
  <BaseEdge
    :id="id"
    :marker-end="markerEnd"
    :path="path[0]"
    :style="style"
  />
  <EdgeLabelRenderer>
    <div
      :style="{
        pointerEvents: 'all',
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
      }"
    >
      {{ itemAmount?.item.name }}
      <br>
      {{ parseFloat((itemAmount?.amountPerMinute ?? 0).toFixed(3)) }} / min
    </div>
  </EdgeLabelRenderer>
</template>

<script lang="ts">
  import type { ItemAmountPerMinute } from '@/types/itemAmountPerMinute'
  import type { Position } from '@vue-flow/core'
  import { BaseEdge, EdgeLabelRenderer, getBezierPath } from '@vue-flow/core'
  import type { EdgePathParams } from 'node_modules/@vue-flow/core/dist/components/Edges/utils'
  export default defineComponent({
    components: {
      BaseEdge,
      EdgeLabelRenderer,
    },
    props: {
      id: {
        type: String,
        required: true,
      },
      sourceX: {
        type: Number,
        required: true,
      },
      sourceY: {
        type: Number,
        required: true,
      },
      targetX: {
        type: Number,
        required: true,
      },
      targetY: {
        type: Number,
        required: true,
      },
      sourcePosition: {
        type: String,
        required: true,
      },
      targetPosition: {
        type: String,
        required: true,
      },
      data: {
        type: Object,
        required: false,
      },
      markerEnd: {
        type: String,
        required: false,
      },
      style: {
        type: Object,
        required: false,
      },
    },
    computed: {
      path(): EdgePathParams {
        const typedSourcePosition = this.sourcePosition as Position
        const typedTargetPosition = this.targetPosition as Position
        return getBezierPath({ sourceX: this.sourceX, sourceY: this.sourceY, targetX: this.targetX, targetY: this.targetY, sourcePosition: typedSourcePosition, targetPosition: typedTargetPosition })
      },
      itemAmount(): ItemAmountPerMinute | null {
        return this.data?.item ?? null
      },
    },
  })
</script>
