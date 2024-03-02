<template>
  <v-img
      class="mx-auto"
      height=auto
      lazy-src="https://picsum.photos/id/11/100/60"
      max-width="500"
      :src="this.source"
      :alt="this.alt"
  >
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
            color="grey-lighten-4"
            indeterminate
        ></v-progress-circular>
      </div>
    </template>
  </v-img>
</template>

<script>

export default {
  name: "ParticularPhoto",
  props: {
    source: {
      type: String,
      required: true,
    },
    alt: {
      type: String
    }
  },
  setup(props) {

  }
}
</script>

<style scoped>

</style>
