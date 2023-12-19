<template>
  <div>
      <img :src="this.source"
           :alt="this.alt"
      class="photo">
  </div>
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
  setup() {

  }
}
</script>

<style scoped>
  .photo {
    width: 100%;
    border-radius: 25px;
    /*height: 30%;*/
  }
  .photo:hover {

  }
</style>
