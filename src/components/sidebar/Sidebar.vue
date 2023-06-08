<script>
import SidebarLink from './SidebarLink'
import Searchbar from '@/components/searchbar/Searchbar.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './sidebarState'

export default {
  props: {},
  components: { SidebarLink, Searchbar },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="container">
    <div class="sidebar" :style="{ width: sidebarWidth }">
      <h1>
        <span v-if="collapsed">
          <div>S</div>
          <div>E</div>
        </span>
        <span v-else>Sakaar Encyclopedia</span>
      </h1>

      <SidebarLink to="/" icon="fas fa-dice-d20">Tutti</SidebarLink>
      <SidebarLink to="/characters" icon="fas fa-users">Personaggi</SidebarLink>
      <SidebarLink to="/areas" icon="fas fa-compass">Luoghi</SidebarLink>
      <SidebarLink to="/items" icon="fas fa-gem">Oggetti</SidebarLink>
      <SidebarLink to="/quests" icon="fas fa-question-circle">
        Missioni
      </SidebarLink>

      <span
        class="collapse-icon"
        :class="{ 'rotate-180': collapsed }"
        @click="toggleSidebar"
      >
        <i class="fas fa-angle-double-left" />
      </span>
    </div>
    <Searchbar></Searchbar>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #5e0000;
  --sidebar-item-hover: #8d1414;
  --sidebar-item-active: #360905;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  overflow: hidden;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  z-index: 3;
}

.sidebar h1 {
  font-family: Eczar;
  line-height: 1;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.container {
  position: fixed;
  left: 30;
  padding: 0;
  margin: 0;
  z-index: 1;
}
</style>
