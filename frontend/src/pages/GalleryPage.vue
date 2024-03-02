<template>
  <section class="main-body">
    <aside>
      <div class="aside-div">
        <h3>Roky</h3>
        <ul>
          <li v-for="year in years" :key="year" @click="getPhotosByYear(year)">{{ year }}</li>
        </ul>
      </div>
    </aside>

    <div class="gallery">
      <div class="gallery-side">
        <div class="gallery-item" v-for="photo in photos">
          <ParticularPhoto :source="photoPreset + photo.year + '/' + photo.filepath"></ParticularPhoto>
        </div>
      </div>
    </div>

  </section>

</template>

<script>
import ParticularPhoto from "@/components/ParticularPhoto.vue";
import { ref, onMounted } from 'vue';
import api from "@/api/api.js";

export default {
  name: "Gallery",
  components: {ParticularPhoto},
  setup() {
    async function getPhotosByYear(year) {
      const response = await api.get("http://localhost:3000/photos/getByYear/"+year);
      photos.value = response.data
    }
    onMounted(() => {
      getPhotosByYear()
    })
    const photoPreset = "src/assets/gallery/"
    const photos = ref([])
    const years = ref([2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016,
    2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004,
    2003, 2002, 2001, 2000, 1999])
    
    return {
      photos, photoPreset, years,
      getPhotosByYear
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
  /*background-color: #EEEEEE;*/
  background-color: #568534;
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
