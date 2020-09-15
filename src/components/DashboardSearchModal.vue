<template>
  <div class="container searchContainer">
    <div class="searchContainer--scroll">
      <button @click="closeModal" class="closeModalBtn"><img src="../assets/icons/close.svg" alt=""></button>
      <form @submit.prevent="submit" autocomplete="off" class="searchForm" action="#">
        <input v-model="searchValue" class="searchInput" type="search" name="searchInput" id="searchCityInput">
        <button class="searchBtn" type="submit">Szukaj</button>
      </form>
      <div class="container">
        <ul id="resoultsList" class="searchResults">
          <li @click="addCity" class="searchResoult" v-bind:data-cityid="resoult.id" v-bind:key="resoult.id" v-for="resoult in searchResoults">
            <h3 class="searchResult__name notClicable">{{ resoult.name }}</h3>
            <p class="searchResult__country notClicable">Kraj: {{ resoult.country }}</p>
            <p class="searchResult__coordinats notClicable">Szerokość geograficzna: {{ resoult.coord.lat }} | Długość geograficzna: {{ resoult.coord.lon }}</p>
          </li>
        </ul>

        <p v-if="cityNotFound" class="alert alert-danger text-center">Nie znaleziono szukanego miasta, sprawdz poprawność nazwy</p>

      </div>
    </div>
  </div>
</template>

<script>
import cities from '../data/city.list.json';
export default {
  name: "searchModal",
  data() {
    return {
      searchValue: '',
      searchResoults: [],
      cityNotFound: false,
    }
  },

  methods: {
    closeModal() {
      this.$emit('toggleModal');
    },
    submit() {
      const searchValueCapitalized = this.searchValue.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
      const resoultArray = [];


      cities.filter((entry) => {
        if(entry.name === searchValueCapitalized) {
          this.cityNotFound = false;
          resoultArray.push(entry);
          this.searchResoults = resoultArray;
        }
      });
      resoultArray.length <= this.cityNotFound ? this.cityNotFound = true : this.cityNotFound = false;

    },
    addCity(item) {
      const cityID = item.target.dataset.cityid;
      this.$emit('getCityID', cityID);
      this.closeModal();
    },

  }
}
</script>

<style lang="scss" scoped>
  .searchContainer {
    height: 75%;
    background: #fff;
    border-radius: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    padding: 3.5rem 1rem;
  }

  .searchContainer--scroll {
    overflow-y: scroll;
    height: 100%;
  }

.searchContainer--scroll::-webkit-scrollbar {
    width: 12px;
}

.searchContainer--scroll::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    height: 200px;
}

.searchContainer--scroll::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #673ab7;
    -webkit-box-shadow: inset 0 0 6px #673ab7;
}
.searchContainer--scroll::-webkit-scrollbar-thumb:window-inactive {
	background: #673ab7;
}

  .searchForm {
    text-align: center;
    margin-bottom: 2rem;
  }

  .searchResults {
    max-width: 90%;
    margin: 0 auto;
  }

  .searchResoult {
    background: #f1f1f1;
    cursor: pointer;
    border-radius: 20px;
    padding: 1rem;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      background: #673ab7;
      color: #fff;
    }

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  .searchResult__country {
    margin: 0;
  }

  .closeModalBtn {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 1rem;
    right: 2rem;
    border: none;
    background: none;

    >img {
      width: 100%;

    }
  }

  .searchInput, .searchBtn {
    height: 2rem;
    margin-right: 1rem;
    border: 2px solid #3f51b5;
    border-radius: 15px;
    outline: none;
    padding: 0 1rem
  }

  .searchInput:focus {
    background:#d9dfff;
  }

  .searchBtn {
    transition: 0.2s;
    color:#3f51b5;
    background: transparent;
    &:hover {
      background:#3f51b5;
      color: #fff;
      transition: 0.2s;
    }
  }

  .notClicable {
    pointer-events: none;
  }
</style>