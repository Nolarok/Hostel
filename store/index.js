export const state = () => ({
  main: 'main'
})

export const mutations = {
  increment (state) {
    state.main = state.main + 1
  }
}
