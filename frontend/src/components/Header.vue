<template>  
  <header>
    <nav>
      <a class="logo-title" href="/">
        <h1>Nebeský šramot</h1>
      </a>
      <ul class="desktop-menu">
        <li><a href="/">Domov</a></li>
        <li><a href="/about">O nás</a></li>
        <li><a href="/gallery">Galéria</a></li>
        <li><a href="#">História</a></li>
        <li><a class="songs" href="#">Piesne</a></li>
      </ul>

      <div id="dropdown" class="drop-down">

        <a @click="show('mobile-menu')" class="mobile-hamburger" href="javascript: void(0)">
          <img style="background-color: rgba(184, 184, 184, 0.26)" id="hamburger" class="hamburger" src="/hamburger.png" alt="">
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
  let hamburger = document.getElementById("hamburger")

  x.style.right = ((x.style.right !== '-100%') ? '-100%' : '0');
  hamburger.style.backgroundColor = ((hamburger.style.backgroundColor !== 'rgba(0, 0, 0, 0.05)') ? 'rgba(0, 0, 0, 0.05)' : 'rgba(184, 184, 184, 0.26)');


  document.addEventListener("click", (evt) => {
    let flyoutEl = document.getElementById("dropdown");
    let targetEl = evt.target; // clicked element
    do {
      if (targetEl === flyoutEl) {
        return;
      }
      targetEl = targetEl.parentNode;
    } while (targetEl);
    x.style.right = "-100%";
    hamburger.style.backgroundColor = 'rgba(184, 184, 184, 0.26)';


  });

}

</script>

<style scoped>
  header {
    position: absolute;
    top: 1.2rem;
    left: 0;
    height: 60px;
    background-color: transparent;
    z-index: 999;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    z-index: 999;
  }

  ul {
    position: fixed;
    border-radius: 25px;
    right: 1.5rem;
    display: flex;
    font-family: sans-serif !important;
    font-weight: lighter;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 0.85rem 2rem;
    background-color: var(--vt-c-white-mute);
    text-align: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  a {
    color: var(--vt-c-text-light);
    margin-right: 2.3rem;
    text-transform: uppercase;
    font-size: 15px;
  }

  a:hover, a:active {
    color: var(--vt-c-text-dark-1);
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  h1 {
    margin-left: 25px;
    text-transform: uppercase;
  }

  .songs {
    margin: 0;
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
      background-color: var(--vt-c-white-mute);
      position: fixed;
      right: 1rem;
      top: 1rem;
      padding: 5px;
      box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
      border-radius: 4px;
      cursor: pointer;
      z-index: 888;
    }

    .hamburger:hover {
      background-color: rgba(0, 0, 0, 0.08);

    }

    .logo-title {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      line-height: 1.1;
    }

    .desktop-menu {
      display: none;
    }

    .mobile-menu {
      position: fixed;
      top: 0;
      width: 100%;
      flex-direction: column;
      padding: 20px;
      background-color: var(--vt-c-white-mute);
      box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
      z-index: 500;
      transition: 0.3s;
      border-radius: 0;
    }

    .mobile-menu a {
      padding: 5px;
      margin: 5px;
    }

    .mobile-menu li {
      padding: 5px;
    }

    .mobile-menu {
      padding: 8px 20px;
    }
  }
</style>


