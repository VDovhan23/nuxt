import EventService from '@/services/EventService.js'
export const state = () => ({//дані
  events: [],
  event: []
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events // функція запису даних
  },
  SET_EVENT(state, event) {
    state.event = event // функція запису даних
  }
}
export const actions = {
  fetchEvents({ commit }) { // реквест
    return EventService.getEvents().then(response => {
      commit('SET_EVENTS', response.data) // виклик функції запису
    })
  },
  getEvent({ commit }, id) { // реквест
    return EventService.getEvent(id).then(response => {
      commit('SET_EVENT', response.data) // виклик функції запису
    })
  }
}
