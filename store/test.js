export const state = () => ({
  data: {
    test1: "test1",
    test2: "test2",
    test3: "test3",
  }
})

export const mutations = {

}

export const getters = {
  GET_DATA(state) {
    return state.data
  }
}
