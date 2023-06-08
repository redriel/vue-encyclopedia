<script>
import {
  collapsed,
  toggleSidebar,
  sidebarWidth
} from '@/components/sidebar/sidebarState'

import { searchbarState } from './searchbarState'

export default {
  setup() {
    return {
      toggleSidebar,
      sidebarWidth,
      collapsed
    }
  },
  data() {
    return {
      searchbarState
    }
  }
}
</script>

<template>
  <span v-if="collapsed"></span>
  <input
    :style="{ left: sidebarWidth }"
    type="text"
    v-model="searchInput"
    @input="searchbarState.setValue(searchInput)"
    placeholder="Cerca personaggi, luoghi, oggetti..."
  />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  padding: 10px;
  background-color: rgb(234, 242, 255);
}

input {
  width: 100%;
  padding: 10px 30px;
  position: fixed;
  display: flex;
  top: 0px;
  background: white url('https://icons8.com/icon/132/search') no-repeat 15px;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 5px 5px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

input:focus {
  outline: 2px solid black;
}
</style>
