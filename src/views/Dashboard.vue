<template>
  <!-- <h1>The sidebar is {{ collapsed ? 'closed' : 'open' }}</h1>
  <button @click="toggleSidebar">Toggle Sidebar</button> -->
  <Card name="Valeros" />
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  },
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>
