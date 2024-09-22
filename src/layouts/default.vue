<template>
  <v-app>
    <v-navigation-drawer
      app
      expand-on-hover
      fixed
      rail
    >
      <v-list
        class="d-flex flex-column"
        dense
        nav
      >
        <v-list-item
          prepend-icon="mdi-home"
          @click="goTo('/')"
        >
          Home
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-wrench-cog"
          @click="goTo('/planner')"
        >
          Planner
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-tools"
          @click="goTo('/items')"
        >
          Items
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :elevation="3">
      <template #prepend>
        <v-app-bar-nav-icon />
      </template>
      <v-app-bar-title>
        Satisfactory Calculator
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <v-dialog
      v-for="error in errors"
      :key="error.id"
      v-model="error.visible"
      max-width="500"
    >
      <v-card>
        <v-card-title>Error</v-card-title>
        <v-card-text>
          {{ error.text }}
        </v-card-text>
        <v-card-actions>
          <span class="grey--text text-caption">
            {{ error.timestamp.toLocaleString() }}
          </span>
          <v-spacer />
          <v-btn @click="error.visible = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import router from '@/router'
  import type { RouteLocationRaw } from 'vue-router'
  import extractErrorMessage from '@/util/extractErrorMessage'

  const goTo = (route: RouteLocationRaw) => {
    router.push(route)
  }

  // eslint-disable-next-line no-array-constructor
  const errors = ref(Array<{
    error: Error
    text: string
    id: number
    visible: boolean
    timestamp: Date
  }>())

  onErrorCaptured(error => {
    errors.value.push({
      id: errors.value.length + 1,
      error,
      text: extractErrorMessage(error),
      visible: true,
      timestamp: new Date(),
    })
  })
</script>
