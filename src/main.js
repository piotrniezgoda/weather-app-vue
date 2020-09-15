
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjiIq_8dCpjH5CXbCNlLlqT5AjnN5NI9M",
  authDomain: "weather-app-46d6e.firebaseapp.com",
  databaseURL: "https://weather-app-46d6e.firebaseio.com",
  projectId: "weather-app-46d6e",
  storageBucket: "weather-app-46d6e.appspot.com",
  messagingSenderId: "438529793308",
  appId: "1:438529793308:web:7adaa2241ce4bc0a542ed9",
  measurementId: "G-NMX130418H"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
