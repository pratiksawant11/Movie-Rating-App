<template>
  <div id="app">
    <nav class="navbar bg-light">
      <div class="nav-bar container-fluid">
        <a class="navtag nav-link color router-link-exact-active active logo-link" href="/">IMRD</a>
        <form class="bar d-flex" role="search">
          <input
            type="text"
            class="bar form-control"
            v-model="query"
            @keyup="getResult(query)"
            placeholder="Search IMR..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div v-for="results in results" :keyup="result.id">
            <p>{{result.title}}</p>
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path" width="100px" />
          </div>
          <ul></ul>
        </form>
      </div>
    </nav>
    <Home />
    <Pagination />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Pagination from "./components/Pagination.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Home,
    Pagination,
    Footer,
    Pagination
  },
  data() {
    return {
      query: "",
      results: ""
    };
  },
  methods: {
     async getResult(query) {
       let result = await axios
        .get(
          'https://api.themoviedb.org/3/search/movie?api_key= 9fa1cdec11613f5b86e56e4f3d32ebca' +
            query)
        .then(response => {
          this.results = response.data.results;
        });
      console.log(this.results);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  width: 100%;
  padding: 0px;
}
.navtag {
  font-size: 50px;
  color: whitesmoke;
  font-family: Courier New Lucida Console Monaco;
  padding: 25px 0px 0px 50px;
}
.bar {
  border-radius: 4.375rem;
  border: 2px solid #ced4da;
  font-size: 30px;
  /* padding: 0px 500px 0px 0px; */
  border: none;
  padding: 0px 50px 0px 30px;
}
.nav-bar {
  background-color: black;
  /* width: 100%; */
  /* padding: 0px; */
  padding: 5px 15px 0px 10px;
}
.page {
  padding: 3rem !important;
}
::-moz-scrollbar {
  width: 20px;
  height: 20px;
}
::-moz-scrollbar-thumb {
  background: linear-gradient(to bottom, #ff850a, #ff3474);
  border-radius: 50px;
}
::-moz-scrollbar-track {
  background: #474747;
}
@media only screen and (max-width: 576px) {
}
</style>
