
<template>
  <div class="button-container">
    <a href="#">{{ this.title }}</a>
<!--    <a href="#">{{ title }}</a>-->
  </div>
</template>

<script>
// Stary sposob -------------------------------
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: "Testik"
    }
  }
}

// import { ref } from 'vue'
//   export default {
//     setup() {
//       //Props :
//       const title = ref("Titulko")
//
//       return {
//         title
//       }
//
//     }
//   }

</script>


<style scoped>
  *:before {
    transition-duration: 0.3s;
  }

  .button-container {
    margin: 2rem;
    width: fit-content;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
  }

  a {
    border: solid 1px var(--vt-c-button-outline);
    background-color: var(--vt-c-button-background);
    font-size: 28px;
    font-family: "Anton", sans-serif !important;
    text-transform: uppercase;
    padding: 0.6rem 5rem;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  a:before {
    position: absolute;
    content: "";
    border: solid 1px var(--vt-button-before);
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  a:hover {
    transition-delay: 0.2s;
    border-radius: 0;
    background-color: transparent;
    border: solid 1px var(--vt-button-before);
  }

  a:hover:before {
    border-radius: 0;
    border: solid 1px var(--vt-c-button-outline);
  }

</style>
