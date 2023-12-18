<template>
  
  <header>
    <nav>
      <h1>Nebeský šramot</h1>
      <ul class="desktop-menu">
        <li><a href="/">Domov</a></li>
        <li><a href="/about">O nás</a></li>
        <li><a href="/gallery">Galéria</a></li>
        <li><a href="#">História</a></li>
        <li><a class="songs" href="#">Piesne</a></li>
      </ul>

      <div id="dropdown" class="drop-down">

        <a @click="show('mobile-menu')" class="mobile-hamburger" href="javascript: void(0)">
          <img class="hamburger" src="/hamburger.png" alt="">
        </a>
          <ul id="mobile-menu" class="mobile-menu" style="right: -100%;">
            <li><a href="/">Domov</a></li>
            <li><a href="/about">O nás</a></li>
            <li><a href="/gallery">Galéria</a></li>
            <li><a href="#">História</a></li>
            <li><a class="songs" href="#">Piesne</a></li>
          </ul>
      </div>
    </nav>
  </header>

</template>

<script setup>


function show(name) {
  let x = document.getElementById(name);
  x.style.right = ((x.style.right !== '-100%') ? '-100%' : '0');

  document.addEventListener("click", (evt) => {
    let flyoutEl = document.getElementById("dropdown");
    let targetEl = evt.target; // clicked element
    do {
      if(targetEl === flyoutEl) {
        return;
      }
      targetEl = targetEl.parentNode;
    } while (targetEl);
    x.style.right = "-100%";
  });

}




</script>

<style scoped>


  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    background-color: var(--color-background-mute);
    z-index: 999;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    z-index: 999;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  a {
    color: var(--vt-c-text-dark-1);
    margin-right: 25px;
    text-transform: uppercase;
    font-size: 15px;
  }

  a:hover, a:active {
    color: var(--vt-c-darkBlue);
  }

  .songs {
    background-color: var(--vt-c-blue);
    padding: 8px 25px;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;

  }

  .songs:hover {
    background-color: var(--vt-c-darkBlue);
    color: var(--vt-c-white-mute);
  }

  li {
    list-style-type: none;
  }

  h1 {
    margin-left: 30px;
  }

 .mobile-hamburger, .drop-down {
    display: none;
  }

  /* MOBILE MENU --------------- */
  
  @media only screen and (max-width: 840px) {
    .mobile-hamburger, .drop-down {
      display: block;
    }

    .hamburger {
      width: 35px;
      position: absolute;
      right: 12px;
      top: 12px;
      padding: 5px;
      box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
      border-radius: 4px;
      cursor: pointer;
      z-index: 888;
    }
    h1 {
      margin: 0 auto;
    }

    .desktop-menu {
      display: none;
    }

    .mobile-menu {
      position: absolute;
      top: 61px;
      width: 100%;
      flex-direction: column;
      padding: 20px;
      background-color: var(--color-background-mute);
      box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
      z-index: 500;
    }

    .mobile-menu a {
      padding: 5px;
      margin: 5px;
    }

    .mobile-menu li {
      padding: 5px;
    }

    .mobile-menu .songs {
      padding: 8px 20px;
    }
  }
</style>