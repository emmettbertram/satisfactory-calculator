<template>
  <v-tooltip bottom>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon
        @click="darkMode = !darkMode"
      >
        <v-icon>
          {{ isDark ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny' }}
        </v-icon>
      </v-btn>
    </template>
    Toggle darkmode
  </v-tooltip>
</template>

<script lang="ts">
  import { useTheme } from 'vuetify'

  export default defineComponent({
    setup() {
      const theme = useTheme()
      return { theme }
    },
    data() {
      return {
        darkMode: false,
      }
    },
    computed: {
      isDark(): boolean {
        return this.theme.global.current.value.dark
      },
    },
    watch: {
      darkMode() {
        this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark'
      },
    },
  })
</script>
