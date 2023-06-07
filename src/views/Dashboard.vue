<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

import Card from '@/components/Card.vue'

import entities from '../json/entities.json'
var filteredEntities = []
filteredEntities = entities.filter((entity) => entity.category == 'character')

export default {
  components: {
    Card
  },
  setup() {
    return { collapsed, toggleSidebar, entities, filteredEntities }
  }
}
</script>

<template>
  <div class="grid-container">
    <Card
      v-for="entity in filteredEntities"
      :key="entity.id"
      :name="entity.name"
      :description="entity.description"
    />
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  padding: 50px;
  padding-top: 40px;
  column-gap: 0px;
  row-gap: 40px;
  justify-items: center;
}
</style>
