<template>
  <section class="main-body">
    <aside>
      <div class="aside-div">
        <h3>Roky</h3>

        <ul>
          <li><a href="#">2023</a></li>
          <li><a href="#">2022</a></li>
          <li><a href="#">2021</a></li>
          <li><a href="#">2020</a></li>
          <li><a href="#">2019</a></li>
          <li><a href="#">2018</a></li>
          <li><a href="#">2017</a></li>
          <li><a href="#">2016</a></li>
          <li><a href="#">2015</a></li>
          <li><a href="#">2014</a></li>
        </ul>
      </div>
    </aside>

    <div class="gallery">
      <div class="gallery-side">
        <div class="gallery-item" v-for="photo in photos">
          <ParticularPhoto :source="photo"></ParticularPhoto>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import ParticularPhoto from "@/components/ParticularPhoto.vue";

export default {
  name: "Gallery",
  components: {ParticularPhoto},
  setup() {

    const photos = [
      "src/assets/images/test1.jpg",
      "src/assets/images/test2.jpg",
      "src/assets/images/test3.jpg",
      "src/assets/images/test4.jpg",
      "src/assets/images/test5.jpg",
      "src/assets/images/test6.jpg",
      "src/assets/images/test7.jpg",
      "src/assets/images/test8.jpg",
    ]

    return {
      photos
    }
  }
}
</script>

<style scoped>
.main-body {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
}



.gallery {
  width: 85%;
}

.gallery-side {
  width: 94%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;

}

.gallery-item {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;


}

/* ASIDE ---------------- */
aside {
  width: 15vw;

}

.aside-div {
  position: fixed;
  background-color: #EEEEEE;
  width: inherit;
  height: 80%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.aside-div ul {
  display: flex;
  flex-direction: column;


}

.aside-div li {
  list-style-type: none;

}

.aside-div a {
  border: solid 1px #00bd7e;

}

</style>
