import request from '~/service'

const state = () => ({
  caseList: [],
  acupointList: []
})

const mutations = {
  setCaseList(state, val) {
    state.caseList = val
  },
  setAcupointList(state, val) {
    state.acupointList = val
  }
}

const actions = {
 setCaseList: ({
    commit
  }, caseList) => {
    commit('setCaseList', caseList)
  },
  setAcupointList: ({
    commit
  }, acupointList) => {
    commit('acupointList', acupointList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
