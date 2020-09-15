<template>
  <div class="city">
    <h2 class="city__name">{{ cityData.name }}</h2>
    <div class="city__statsContainer">
      <p class="city__stats">{{ cityData.temp }}</p>
      <p class="city__stats">{{ cityData.pressure }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "AddedCity",
  data() {
    return {
      API_URL: '',
      API_KEY: '8bf066e8c144add877cf52ce8de3e9bf',
      cityName: '',
      cityData: {
        name: '',
        temp: '',
        humidity: '',
        pressure: '',
      },
    }
  },
  props: {
    id: String,
  },
  methods: {
    makeRequest() {
      const requestURL = `https://api.openweathermap.org/data/2.5/weather?id=${this.id}&appid=${this.API_KEY}&units=metric`;
      const cityInfo = this.cityData;
      axios.get(requestURL)
      .then(function (response) {
        console.log(response)
        cityInfo.name = response.data.name;
        cityInfo.temp = response.data.main.temp;
        cityInfo.humidity = response.data.main.humidity;
        cityInfo.pressure = response.data.main.pressure;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    }
  },
  created() {
    this.makeRequest();
  },

}
</script>

<style lang="scss" scoped>
  .city {
    width: 200px;
    height: 270px;
    background:#3f51b5;
    border-radius: 20px;
    margin: 0 1rem;
    cursor: pointer;
  }

  .city__name {
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
    padding: 1rem 0 2rem;
  }

  .city__stats {
    color: #b1d5ff;
    font-size: 1.2rem;
  }

  .city__statsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

</style>