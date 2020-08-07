interface StateConfig {
  name: String,
  age: Number
}


export const state = (): StateConfig => ({
  name: 'old name',
  age: 0
})

export const mutations = {
  SET_NAME(state: StateConfig, name: String) {
    state.name = name
  }
}