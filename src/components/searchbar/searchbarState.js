import { reactive } from 'vue'

export const searchbarState = reactive({
  input: '',
  setValue(input) {
    this.input = input
  },
  getInput() {
    return this.input
  }
})
