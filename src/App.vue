<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer';

  export default {
    components: {
      Footer,
    }
  }

</script>

<style>
@import './assets/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
