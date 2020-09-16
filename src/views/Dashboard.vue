<template>
  <div class="dashboard container-fluid px-lg-5">
    <header class="row header">
      <div class="col">
        <h1 class="appTitle text-white">Witaj w <span class="text-info">aplikacji pogodowej!</span></h1>
    </div>
    </header>
    <div class="row">
      <ul class="cityCards row">
        <li :key="ID" v-for="ID in observedCities" v-bind:elementID="ID" class="cityCardsItem" @click="displayAdditionalInfo">
          <CityCard @cityData="addCityDataToArray" v-bind:id="ID" />
        </li>
      </ul>

      <div @click="toggleModal" class="cityCard cityCard--addNew">
       <span>+</span>
       <p>dodaj miasto</p>
      </div>
    </div>

    <CityAdditionalInfo ref="updateChartData" v-if="isAdditionalInfoOpen" v-bind:cityData="singleCityData"/>
    <SearchModal v-if="isModalOpen" @toggleModal="toggleModal" @getCityID="addCityToObserve" />
  </div>
</template>

<script>
//import * as firebase from 'firebase';
import CityCard from '../components/DashboardCityCard';
import SearchModal from '../components/DashboardSearchModal';
import CityAdditionalInfo from '../components/DashboardAdditionalInfo';

export default {
  data() {
    return {
      isModalOpen: false,
      isAdditionalInfoOpen: false,
      observedCities: [],
      observedCitiesData: [],
      singleCityData: {},
    }
  },
  components: {
    CityCard,
    SearchModal,
    CityAdditionalInfo
  },
  created: function() {

  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    addCityToObserve(ID) {
      if(this.observedCities.length <= 9) {
        this.observedCities.push(ID);
      } else {
        alert('osiągnąłeś maksymalną liczbę obserowowanych miast');
      }
    },
    addCityDataToArray(data) {
      this.observedCitiesData.push(data);
    },
    displayAdditionalInfo(e) {
      const clickedCardID = e.target.getAttribute('elementID');
      this.observedCitiesData.filter((entry) => {
        if(clickedCardID === entry.id) {
          this.singleCityData = entry;
        }
      })

      //this.$refs.updateChartData.updateChartData();
      this.isAdditionalInfoOpen = true
    },
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    background: #100E3B;
    min-height: 100vh;
  }

  .header {
    margin-bottom: 2rem;
    padding: 1rem 0;
  }

  .appTitle {
    font-size: 2rem;
  }

  .cityCard--addNew {
    width: 200px;
    height: 270px;
    background:#1e3096;
    border-radius: 20px;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: #4257ce;
      border: 2px solid orange;
    }

    >p {
      font-size: 1rem;

    }
  }

  .cityCardsItem {
    margin-bottom: 1rem;
    cursor: pointer;
  }
</style>




