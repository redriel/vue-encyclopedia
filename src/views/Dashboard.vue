<template>
  <Card
    name="Valeros"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
            velit dignissim sodales ut eu sem integer vitae. Id aliquet lectus
            proin nibh nisl condimentum."
  />
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
