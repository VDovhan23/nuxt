<template>
  <div>
    <h1>Events</h1>

      <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event = "event"
      :data-index="index" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import {mapState} from 'vuex'
export default {

  head() {
    return {
      title: 'Event Listening'
    }
  },
  async fetch({ store, error }) {
    try {
      const response = await store.dispatch('events/fetchEvents')
        } catch (error) {
          console.log(error)
        }
  },
  computed: mapState({
    events: state=>state.events.events
  }),
  components: {
    EventCard
  }
}
</script>

<style></style>
<!--https://git.heroku.com/pure-bayou-21527.git-->
