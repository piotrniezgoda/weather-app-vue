<template>
  <div class="container-fluid displayInfo">
    <div class="col">
        <h2 class="cityName text-white h2 text-center">{{ cityData.name }}</h2>
    </div>
    <div class="row row--padding">
      <div class="col">
        <ul class="displayInfo__basic">
          <li class="infoListItem"><h4 class="h4 text-white statTitle">Temperatura:</h4> {{ cityData.temp }}&#8451;</li>
          <li class="infoListItem"><h4 class="h4 text-white statTitle">Temperatura odczuwalna: </h4>{{ cityData.temp_feelsLike }}&#8451;</li>
          <li class="infoListItem"><h4 class="h4 text-white statTitle">ciśnienie: </h4>{{ cityData.pressure }} hPa</li>
          <li class="infoListItem"><h4 class="h4 text-white statTitle">wilgotność: </h4>{{ cityData.humidity }}%</li>
          <li class="infoListItem"><h4 class="h4 text-white statTitle">Prędkość wiatru: </h4>{{ cityData.wind }}km/h</li>
        </ul>
         <button class="city__button" @click="openChart">Wykres</button>
      </div>
      <div class="col">
        <div class="row">
          <TemperatureChart :key="componentKey" v-bind:temperatures="city.temperatures" v-if="isChartOpen" />
        </div>
        <div class="row">
          <HumidityChart :key="componentKey" v-bind:humidities="city.humidities" v-if="isChartOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TemperatureChart from '../components/TempChart';
import HumidityChart from '../components/HumidityChart';
export default {
  data() {
    return {
      isChartOpen: false,
      city: {},
      componentKey: 0,
    }
  },
  components: {
    TemperatureChart,
    HumidityChart
  },
  props: {
    cityData: Object,
  },
  mounted: function() {
    setInterval(() => {
      this.componentKey += 1;
      this.updateChartData()
    }, 7000);
  },
  methods: {
    openChart() {
      this.city.temperatures = this.cityData.temperatures;
      this.city.humidities = this.cityData.humidities;
      this.isChartOpen = !this.isChartOpen;
    },
    updateChartData() {
      this.city.temperatures = this.cityData.temperatures;
      this.city.humidities = this.cityData.humidities;
    }
  },
}
</script>

<style lang="scss" scoped>

  .displayInfo {
    padding: 3rem 1rem 1rem 1rem;
    box-shadow: -4px -4px 4px rgba(255, 255, 255, 0.28), 4px 4px 4px rgba(0, 0, 0, 0.34);
    border-radius: 20px;
    transition: 0.3s;
    min-height: 350px;
  }

  .cityName {
    border-bottom: 1px solid #fff;
    padding-bottom: 2rem;
  }
  .statTitle {
    margin: 0;
    margin-right: .5rem;
  }

  .infoListItem {
    display: flex;
    align-items: center;
    color: #a4d1ff;
    font-size: 1.2rem;
    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
    }
  }

  .displayInfo__basic {
    padding-left: 1rem;
    margin-bottom: 1rem;
  }

  .city__button {
    background: none;
    border: none;
    color: #fff;
    padding: 0.5rem 1.5rem;
    margin-left: 1rem;
    font-weight: 700;
    box-shadow:
    0.3em 0.3em 0 0 #32097b,
    inset 0.3em 0.3em 0 0 #673AB7;
    transition: .3s;
    border-radius: 15px;
    outline: none;

  &:hover,
  &:focus {
    box-shadow:
      0 0 0 0 #32097b,
      inset 6em 3.5em 0 0 #673AB7;
  }
}

.row--padding {
  padding: 2rem 0;
}


</style>