<template>
  <div>
    <canvas class="chart" id="chartHumidity" width="500" height="300"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
export default {
  data() {
    return {

    }
  },
  props: {
    humidities: Object,
  },
  methods: {

  },

   mounted: function (){
    const data = {
      labels: this.humidities.times,
  datasets: [{
        data: this.humidities.values,
        borderColor: "#3e95cd",
        fill: 'origin',

      }]
};

var option = {
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  },
  legend: {
    display: false,
    labels: {
      fontColor: '#fff',
    }
  },
  title: {
      display: true,
      text: 'Wykres wilgotności',
      fontColor: '#fff',
      fontSize: 16,
    }
};
    Chart.Line('chartHumidity', {
    options: option,
    data: data
});

  },
}
</script>

<style lang="scss" scoped>
  .chart {
    width: 100%;
    height: 100%;
  }
</style>