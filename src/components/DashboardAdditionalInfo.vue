<template>
  <div class="container-fluid displayInfo">
    <div class="col">
        <h2 class="cityName text-white h2 text-center">{{ cityData.name }}</h2>
    </div>
    <div class="row">
      <div class="col">
        <ul class="displayInfo__basic">
          <li class="infoListItem"><h4 class="h4 text-white statTitle">Temperatura:</h4> {{ cityData.temp }}&#8451;</li>
          <li class="infoListItem"><h4 class="h4 text-white statTitle">Temperatura odczuwalna: </h4>{{ cityData.temp_feelsLike }}&#8451;</li>
          <li class="infoListItem"><h4 class="h4 text-white statTitle">ciśnienie: </h4>{{ cityData.pressure }} hPa</li>
          <li class="infoListItem"><h4 class="h4 text-white statTitle">wilgotność: </h4>{{ cityData.humidity }}%</li>
          <li class="infoListItem"><h4 class="h4 text-white statTitle">Prędkość wiatru: </h4>{{ cityData.wind }}km/h</li>
        </ul>
         <button class="btn btn-info city__button" @click="openChart">Wykres</button>
      </div>
      <div class="col">
        <div class="row">
          <temperatureChart :key="componentKey" v-bind:temperatures="city" v-if="isChartOpen" />
        </div>
        <div class="row">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import temperatureChart from '../components/TempChart';
export default {
  data() {
    return {
      isChartOpen: false,
      city: {},
      componentKey: 0,
    }
  },
  components: {
    temperatureChart,
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
      this.city = this.cityData.temperatures;
      this.isChartOpen = !this.isChartOpen;
    },
    updateChartData() {
      this.city = this.cityData.temperatures;
    }
  },
}
</script>

<style lang="scss" scoped>

  .displayInfo {
    padding: 3rem 1rem 1rem 1rem;
    background: #3f51b5;
    border-radius: 20px;
    transition: 0.3s;
    min-height: 350px;
  }

  .cityName {
    border-bottom: 1px solid #fff;
  }
  .statTitle {
    margin: 0;
    margin-right: .5rem;
  }

  .infoListItem {
    display: flex;
    color: #a4d1ff;
    font-size: 1.2rem;
    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
    }
  }

</style>