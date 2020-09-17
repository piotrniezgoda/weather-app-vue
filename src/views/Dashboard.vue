<template>
  <div class="dashboard container-fluid px-lg-5">
    <header class="row header">
      <div class="col-md-10">
        <h1 class="appTitle text-white">Witaj w <span class="appTitle--colorText">aplikacji pogodowej!</span></h1>
    </div>
    <div class="col-sm-2">
      <button @click="logout" class="btn btn-logout">Wyloguj</button>
    </div>
    </header>
    <div class="row cardsRow">
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
import firebase from 'firebase';

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
    logout() {
      console.log('logout')
      firebase.auth().signOut().then(() => {
        console.log('wylogowano pomyślnie');
        this.$router.replace({ name: "Home" });
      })
      .catch((e) => {
        console.log('wylogowanie nie powiodło się: ' + e);
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    background: #100E3B;
    min-height: 100vh;
    padding-bottom: 2rem;
  }

  .header {
    margin-bottom: 2rem;
    padding: 1rem 0;
    border-bottom: 2px solid #312c67;
  }

  .appTitle {
    font-size: 2rem;
    text-align: center;
  }

  .cityCard--addNew {
    width: 200px;
    height: 270px;
    box-shadow:-4px -4px 4px rgba(255, 255, 255, 0.28), 4px 4px 4px rgba(0, 0, 0, 0.34);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 1rem;

    &:hover {
      transition: 0.3s;
      box-shadow:-4px -4px 4px #673AB7, 4px 4px 4px #3F51B5;
    }

    >p {
      font-size: 1rem;

    }
  }

  .cityCards {
    margin-right: 1rem;
    margin-left: 0;
  }

  .cityCardsItem {
    margin-bottom: 1rem;
    cursor: pointer;

  }

  .appTitle--colorText {
    color: #b1adde;
  }

  .cardsRow {
    padding: 1rem 0 2rem 0;
  }

  .btn-logout {
    background: #3f51b5;
    color: #fff;

    &:hover {
      background: #6173d8;
    }
  }
</style>




