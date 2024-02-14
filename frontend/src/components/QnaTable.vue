
<template>
<div class="block">
  <h1>{{ this.question }}</h1>
  <p>{{ this.answer }}</p>
</div>
</template>

<script>
export default {
  name: "QnaTable",
  props: {
    question: {
      type: String,
      default: "Question",
      required: true
    },

    answer: {
      type: String,
      default: "Answer",
      required: true
    }
  }
}


</script>

<style scoped>
  .block {
    background-color: var(--vt-c-black-mute);
    width: fit-content;
    max-width: 40em;
    padding: 2rem;
    border-radius: 25px;
  }
</style>