<template>
  <Header></Header>
  <div>
    <h1>Hello world</h1>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "About",
  components: {
    Header
  }
}
</script>

<style scoped>

  div {
    text-align: center;

  }
</style>
