<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

import Card from '@/components/Card.vue'

import { store } from '@/components/store.js'

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
      store
    }
  },
  watch: {
    store: {
      deep: true,
      handler: function filteredCharactersUpdate2(store) {
        let input = store.getInput()
        console.log(filteredCharacters)
        filteredCharacters = entities.filter(
          (entity) =>
            entity.category == 'character' &&
            entity.name.toLowerCase().includes(input.toLowerCase())
        )
        console.log(input)
        console.log(filteredCharacters)
        return filteredCharacters
      }
    }
  },
  computed: {
    filteredCharactersUpdate1() {
      let input = store.getInput()
      console.log(filteredCharacters)
      filteredCharacters = entities.filter(
        (entity) =>
          entity.category == 'character' &&
          entity.name.toLowerCase().includes(input.toLowerCase())
      )
      return filteredCharacters
    }
  }
}

// function filters(input) {
//   filteredCharacters = entities.filter(
//     (entity) =>
//       entity.category == 'character' && entity.name.toLowerCase() == input
//   )
//   return filteredCharacters
// }

console.log(store.getInput())
</script>

<template>
  <div class="grid-container">
    <Card
      v-for="entity in filteredCharactersUpdate1"
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
