<template>
  <v-container class="fill-height">
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-card class="ma-4" variant="tonal">
          <v-card-title>
            All Items
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="search"
              clearable
              density="compact"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="solo-filled"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider />
    <v-container fluid>
      <v-row>
        <v-col v-for="item in itemsToShow" :key="item.className" cols="4" md="3">
          <ItemCard :item="item" />
        </v-col>
      </v-row>
    </v-container>
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
        items: [] as Item[],
        search: null as string | null,
      }
    },
    computed: {
      itemsToShow(): Item[] {
        const searchValue = this.search?.toLocaleLowerCase() ?? ''
        if (searchValue !== '') {
          return this.items
            .filter(i => i.name.toLocaleLowerCase().includes(searchValue) ||
              i.slug.toLocaleLowerCase().includes(searchValue) ||
              i.className.toLocaleLowerCase().includes(searchValue))
        }
        return this.items
      },
    },
    async mounted() {
      await this.dataStore.getData()
      this.items = this.dataStore.getItems().sort((a, b) => a.name.localeCompare(b.name))
    },
  })
</script>
