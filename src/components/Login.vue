<template>
  <form action="#" @submit.prevent="submit">
    <div class="form-group">
      <label class="text-info" for="emailInput">Adres email</label>
      <input v-model="login" type="email" class="form-control" id="emailInput" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label class="text-info" for="passwordInput">Hasło</label>
      <input v-model="password" type="password" class="form-control" id="passwordInput">
    </div>
    <button type="submit" class="btn btn-primary">Zaloguj</button>
    <span v-if="loginError" class="alert alert-danger errorLogin">Błędne dane logowania!</span>
  </form>
</template>

<style lang="scss" scoped>
  .errorLogin {
    display: block;
    margin-top: 2rem;
    text-align: center;
  }
</style>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
      loginError: false
    }
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.login, this.password)
        .then(() => {
          sessionStorage.setItem('isUserLogged',true);
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.loginError = true;
          this.login = '',
          this.password = '';
          this.error = err.message;
        });
    }
  }
}
</script>
