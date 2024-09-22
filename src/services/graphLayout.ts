import { type Edge, type Node, Position, useVueFlow } from '@vue-flow/core'
import { ref } from 'vue'
import dagre from '@dagrejs/dagre'

export function useLayout() {
  const { findNode } = useVueFlow()

  const graph = ref(new dagre.graphlib.Graph())

  function layout(nodes: Node[], edges: Edge[]): Node[] {
    const dagreGraph = new dagre.graphlib.Graph()

    graph.value = dagreGraph

    dagreGraph.setGraph({ rankdir: 'LR', nodesep: 200, edgesep: 50, ranksep: 150 })
    dagreGraph.setDefaultNodeLabel(() => ({}))
    dagreGraph.setDefaultEdgeLabel(() => ({}))

    for (const node of nodes) {
      const graphNode = findNode(node.id)
      if (graphNode) {
        dagreGraph.setNode(node.id, { width: graphNode.dimensions.width || 150, height: graphNode.dimensions.height || 50 })
      }
    }

    for (const edge of edges) {
      dagreGraph.setEdge(edge.source, edge.target)
    }
    dagre.layout(dagreGraph)

    return nodes.map((node, index) => {
      const nodeWithPosition = dagreGraph.node(node.id)

      return {
        ...node,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        position: { x: nodeWithPosition.x + index * 10, y: nodeWithPosition.y },
      }
    })
  }

  return { graph, layout }
}
