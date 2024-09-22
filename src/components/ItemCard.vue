<template>
  <v-card>
    <v-card-title>
      {{ item.name }}
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item>
          Slug: {{ item.slug }}
        </v-list-item>
        <v-list-item>
          ClassName: {{ item.className }}
        </v-list-item>
        <v-list-item>
          Description: {{ item.description }}
        </v-list-item>
        <v-list-item>
          StackSize: {{ item.stackSize }}
        </v-list-item>
        <v-list-item>
          EnergyValue: {{ item.energyValue }}
        </v-list-item>
        <v-list-item>
          Liquid: {{ item.liquid }}
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import { type Item } from '@/types/item'
  import type { PropType } from 'vue'

  export default defineComponent({
    props: {
      item: {
        type: Object as PropType<Item>,
        required: true,
      },
    },
  })
</script>
