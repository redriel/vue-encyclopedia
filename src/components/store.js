// store.js
import { reactive } from 'vue'

export const store = reactive({
  input: '',
  setValue(input) {
    this.input = input
  },
  getInput() {
    return this.input
  }
})
