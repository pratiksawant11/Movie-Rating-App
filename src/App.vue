<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a
            class="headtag nav-link color router-link-exact-active active logo-link"
            href="/"
          >World Movies</a>
        </div>

        <form class="navbarr navbar-form navbar-left" action="/action_page.php">
          <div class="searchh">
            <input
              type="text"
              class="form-control d-flex borderdata"
              placeholder="Search"
              name="search"
              v-model="query"
              @keyup="handleSubmit(query)"
            />
          </div>

          <button class="btn btn-default" type="submit">
            <i class="glyphicon glyphicon-search"></i>

            <div class="container-fluid" v-for="movie in data" :key="movie.id">
              <h6>{{ movie.original_title }}</h6>
              <img v-bind:src="'http://images.tmdb.org/t/p/w500/' +movie.poster_path" width="250px" />

              <div class="container-fluid d-flex" v-if="query">
                <div class="row text-center">
                  <div
                    class="searchdata col-sm-6 col-md-4 col-lg-3 p-3"
                    v-for="items in data"
                    :key="items.id"
                  >
                    <div class="card d-flex">
                      <div class="poster">
                        <img
                          class="cardd card-img-top"
                          :src="'http://image.tmdb.org/t/p/w500/'+items.poster_path"
                          alt="Card image cap"
                        />
                      </div>
                      <div>
                        <div class="card-content">
                          <div class="title px-3 pt-3">
                            <h5 class="card-title">{{items.title}}</h5>
                          </div>

                          <div class="d-flex flex-row">
                            <div class="rel release-date d-flex flex-column text-left p-3">
                              <div class="rel">Release date</div>
                              <div class="date">{{items.release_date}}</div>
                            </div>

                            <div class="rate rating p-3">
                              <div>Rating☆</div>
                              <div>{{items.vote_average}}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </form>
      </div>
    </nav>

    <Btnn />
    <Home />
    <Pagination />
    <Footer />
  </div>
</template>

<script>
import Btnn from "./components/Btnn.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Pagination from "./components/Pagination.vue";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      query: "",
      data: []
    };
  },
  components: {
    Home,
    Pagination,
    Footer,
    Pagination,
    Btnn
  },
  methods: {
    async handleSubmit(query) {
      let result = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=9fa1cdec11613f5b86e56e4f3d32ebca&query=" +
          query
      );
      this.data = result.data.results;
      console.log(this.data);
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
  background-color: black;
}
.headtag {
  padding: 0px 0px 0px 14px;
  font-size: 45px;
  padding: 12px 6px 0px 4px;
  color: #42b983;
  padding: 0px 0px 10px 0px;
}
.headtag:hover {
  background: black;
  box-shadow: 0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 10px #ff96ad;
}
.navtag1 {
  color: #42b983;
  font-size: 46px;
  padding: 10px 0px 0px 40px;
}
.form-control {
  transform: translate(-50, -50);
  color: white;
  font-size: 16px;
  background: transparent;
  padding: 10px;
  border: solid3px #9a86fd;
  outline: inset;
  border-radius: 50px;
  transition: all 0.1s;
  box-shadow: 0 4px 8 px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #9a86fd;
  padding: 9px 0px 10px 25px;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
  font-size: 24px;
  color: white;
}

.navbar-header {
  padding: 0px 0px 20px 0px;
}

.nav-item {
  font-size: 20px;
}

.navbar-toggler {
  background-color: white;
  color: black !important;
}

.btn {
  background-color: black !important;
}

.searchdata {
  background-color: black;
}
.searchh {
  padding: 0px 55px 15px 0px;
}
.d-flex {
  background-color: #1f2833;
  /* padding: 0px 0px 0px 5px; */
  font-size: 18px;
}

h5 {
  color: white;
  font-size: 25px;
}

.title {
  background-color: #1f2833;
  padding: 0px 0px 25px 0px;
}

.rel {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.date {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.rate {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.card-content {
  background-color: #1f2833;
  height: 256px;
}
.container-fluid {
  background-color: black !important;
}
.card-title {
  /* font-size: 40px; */
  font-family: Georgia, serif;
}
.card-title:hover {
  color: #df133c;
}
h6 {
  color: whitesmoke;
  font-size: 300%;
}
h6:hover {
  color: #df133c;
}
.display-4 {
  font-size: 22px;
}
.display-4:hover {
  color: black;
}
.navbarr {
  padding: 12px 45px 0px 0px;
}
.navbarr {
  color: white !important;
}

input:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffbb70;
}

@media only screen and (max-width: 576px) {
  .navbarr {
    padding: 12px 10px 0px 0px;
  }
  .searchh {
    padding: 0px 0px 15px 0px;
  }
}
</style>
