<template>
  <div>
    <canvas class="chart" id="chart" width="500" height="300"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
export default {
  data() {
    return {
      chart: document.querySelector('#chart'),
    }
  },
  props: {
    temperatures: Object,
  },
  methods: {

  },

   mounted: function (){
    const data = {
      labels: this.temperatures.times,
  datasets: [{
        data: this.temperatures.values,
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
  line: {
    backgroundColor: 'red',
  },
  title: {
      display: true,
      text: 'Wykres temperatury',
      fontColor: '#fff',
      fontSize: 16,
    }
};
    Chart.Line('chart', {
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