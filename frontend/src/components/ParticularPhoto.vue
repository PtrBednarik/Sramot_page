<template>
      <img :src="this.source"
           :alt="this.alt"
      class="photo">
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
  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>
