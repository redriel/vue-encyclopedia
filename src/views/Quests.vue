<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/sidebarState'
import Card from '@/components/Card.vue'
import { searchbarState } from '@/components/searchbar/searchbarState.js'
import entities from '../json/entities.json'

let filteredCharacters = entities

export default {
  components: {
    Card
  },
  setup() {
    return { collapsed, toggleSidebar, filteredCharacters }
  },
  data() {
    return {
      searchbarState
    }
  },
  computed: {
    filteredCharactersUpdate() {
      let input = searchbarState.getInput()
      console.log(filteredCharacters)
      filteredCharacters = entities.filter(
        (entity) =>
          entity.category == 'quest' &&
          entity.name.toLowerCase().includes(input.toLowerCase())
      )
      return filteredCharacters
    }
  }
}
</script>

<template>
  <div class="grid-container">
    <Card
      v-for="entity in filteredCharactersUpdate"
      :key="entity.id"
      :name="entity.name"
      :image="entity.image"
      :description="entity.description"
    />
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-rows: 300px;
  padding: 50px;
  padding-top: 40px;
  column-gap: 0px;
  row-gap: 40px;
  justify-items: start;
}
</style>
