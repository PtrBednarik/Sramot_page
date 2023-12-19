<template>
  <div class="gallery">
    <div v-for="photo in photos">
      <ParticularPhoto :source="photo"></ParticularPhoto>
    </div>
  </div>

</template>

<script>
import ParticularPhoto from "@/components/ParticularPhoto.vue";

export default {
  name: "Gallery",
  components: {ParticularPhoto},
  setup() {

    const photos = [
      "src/assets/Photos/2021_omsa.jpg",
      "src/assets/Photos/2021_omsa_2.jpg",
      "src/assets/Photos/2021_omsa_3.jpg",
      "src/assets/Photos/2021_omsa_4.jpg",
      "src/assets/Photos/2021_omsa_5.jpg",
      "src/assets/Photos/2021_omsa_6.jpg",
    ]

    return {
      photos
    }
  }
}
</script>

<style scoped>
.gallery {
  /*margin: 5px;*/
  /*border: 1px solid #ccc;*/
  /*float: left;*/
  /*width: 180px;*/
  /*display: flex;*/
}
</style>
