<template>
  <section class="top-main-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DC9068" fill-opacity="1" d="M0,224L40,213.3C80,203,160,181,240,192C320,203,400,245,480,250.7C560,256,640,224,720,208C800,192,880,192,960,192C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>    <div class="main-title-container">
      <div class="head-title">
      <h1>Zbor Dobrého pastiera</h1>
      <h3>Nebeský šramot</h3>
      </div>
      <div class="buttons-container">
        <Button title="Piesne"></Button>
        <Button title="Galéria"></Button>
        <Button title="Kontakt"></Button>
      </div>
    </div>
  </section>
  <section class="about-container">
    <h1>Nebeský Šramot</h1>
    <div class="flex-container">
      <div class="white-box">
        <div>
          <h2>Kto sme?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque dictum, quam nec facilisis molestie, odio
            justo lobortis est, sed fringilla mi purus id nisl. Suspendisse
            nec varius lacus. Aliquam at varius quam. Integer dapibus massa
            sem, quis tempus nisl a. Donec non quam ut leo consectetur convallis.
            Nam maximus turpis et velit venenatis tempus.
          </p>
          <div class="about-button">
          <Button action="/about" title="Viac"></Button>
          </div>
        </div>
      </div>
      <img class="piano-image" src="../../src/assets/images/piano.JPG" alt="">
    </div>
  </section>
  <section class="question-container">
    <qna-table question="Ja som jaro" answer=
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Pellentesque dictum, quam nec facilisis molestie, odio justo
          lobortis est, sed fringilla mi purus id nisl. Suspendisse nec
           varius lacus. Aliquam at varius quam. Integer dapibus massa sem,
            quis tempus nisl semper ultrices. Proin vitae felis vitae quam
            faucibus rhoncus."
    ></qna-table>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import QnaTable from "@/components/QnaTable.vue";
export default {
  name: "HomePage",
  components: {
    Button,
    QnaTable
  }
}
</script>

<style scoped>
  .top-main-container {
    background: rgba(0, 0, 0, 0.4) url("../../src/assets/images/background.jpg");
    background-blend-mode: overlay;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: fit-content;
    min-height: 100vh;
  }

  .main-title-container {
    padding-top: 12em;
    margin: 0 auto;
    width: 90%;
    line-height: 1;
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2em;
    z-index: 10;
  }

  .main-title-container h1 {
    font-size: 96px;
    text-transform: uppercase;
    width: 50%;
  }

  .main-title-container h3 {
    font-size: 48px;
  }

  svg {
    position: absolute;
    bottom: -1px !important;
    z-index: 0;
    width: 100%;
  }

  /** ------ ABOUT SECTION */

  .about-container {
    background: var(--color-background-orange);
    background: linear-gradient(180deg, var(--color-background-orange) 0%, var(--color-background-orange-dark) 100%);
    min-height: fit-content;
  }

  .about-container h1 {
    text-align: center;
    font-size: 48px;
    padding-bottom: 5rem;
  }

  .flex-container {
    display: flex;
    padding-bottom: 5em;
  }

  .white-box {
    background-color: var(--color-background-white-opacity);
    color: var(--vt-c-text-dark-1);
    width: 50%;
    padding: 4.5rem 4.5rem 0 4.5rem;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }

  .white-box p {
    max-width: 50em;
  }

  .about-button {
    display: flex;
    justify-content: right;
  }

  .piano-image {
    max-width: 700px;
    height: auto;
    margin: 0 auto;
    flex-wrap: wrap;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }

  @media only screen and (max-width: 1500px) {
    .flex-container {
      flex-direction: column;
    }

    .white-box {
      margin: 30px auto;
      border-radius: 25px;
      width: 80%;
    }

    .piano-image {
      max-width: 50%;
    }

  }


</style>
