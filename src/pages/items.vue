<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto">
      <v-row>
        <v-col v-for="item in items" :key="item.className">
          <ItemCard :item="item" />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
  import { useDataStore } from '@/stores/data'
  import { type Item } from '@/types/item'

  export default defineComponent({
    setup() {
      const dataStore = useDataStore()
      return { dataStore }
    },
    data() {
      return {
        items: {} as Record<string, Item>,
      }
    },
    async mounted() {
      await this.dataStore.getData()
      // this.items = this.dataStore.items
    },
  })
</script>
