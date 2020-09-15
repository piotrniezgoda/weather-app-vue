<template>
  <div class="home">
    <header class="homeHeader">
      <h1 class="title p-3 text-white">Logowanie do aplikacji</h1>
      <button
        data-toggle="tooltip"
        data-placement="bottom"
        title="login: admin@weatherapp.pl | hasło: admin"
        class="helpButton">
          <img class="iconImage" src='../assets/icons/icon-info.svg' alt="" >
        </button>
    </header>
    <main class="main container-sm">
      <Login />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery';
import Login from '../components/Login';

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>

  .main {
    max-width: 30rem;
    padding: 5rem 1rem 1rem;
  }

  .title {
    font-size: 2.5rem;
    text-align: center;
  }

  .home {
    background: #100E3B;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .homeHeader {
    padding: 4rem 1rem 2rem;
    text-align: center;
  }

  .iconImage {
    width: 2rem;
  }

  .helpButton {
    background: none;
    border: none;
  }
</style>
