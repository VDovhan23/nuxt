<template>
  <div>
    <h1>Event #{{ id }}</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Event #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you nned to know about event #' + this.id
        }
      ]
    }
  },
  computed: {
    id() {
      return this.$route.params.id ? this.$route.params.id : ''
    }
  }
}
</script>

<style></style>
