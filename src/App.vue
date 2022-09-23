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

        <form class="navbar-form navbar-left" action="/action_page.php">
          <!-- <div class=""> -->
          <input
            type="text"
            class="form-control borderdata"
            placeholder="Search"
            name="search"
            v-model="query"
            @keyup="handleSubmit(query)"
          />

          <button class="btn btn-default" type="submit">
            <i class="glyphicon glyphicon-search"></i>
            <div v-for="movie in data" :key="movie.id">
              <h6>{{ movie.original_title }}</h6>
              <img v-bind:src="'http://images.tmdb.org/t/p/w500/' +movie.poster_path" width="100px" />

              <div v-if="query">
                <h2 class="display-4">Search result</h2>
              </div>
              <div class="container-fluid d-flex" v-if="query">
                <div class="row text-center">
                  <div
                    class="searchdata col-sm-6 col-md-4 col-lg-3 p-3"
                    v-for="items in data"
                    :key="items.id"
                  >
                    <!-- <div class="card d-flex"> -->
                    <div class="poster">
                      <img
                        class="cardd card-img-top"
                        :src="'http://image.tmdb.org/t/p/w500/'+items.poster_path"
                        alt="Card image cap"
                      />
                    </div>
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
                        <!-- </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>

          <!-- <form
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </form>
              <div
                class="offcanvas offcanvas-end text-bg-black"
                tabindex="-1"
                id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
              >
                <div class="bar1 offcanvas-header">
                  <a
                    class="navtag1 nav-link color router-link-exact-active active logo-link"
                    href="/"
                  >World Movies</a>

                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="bar2 offcanvas-body">
                  <ul class="toggle navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Bollywood</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Hollywood</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Web-Series</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Hindi Dubbed Movies</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Most Popular Movies</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">250+ Movies</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Movie News</a>
                    </li>
                  </ul>
                </div>
          </div>-->
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
  padding: 0px 0px 0px 20px;
  font-size: 45px;
  color: #42b983;
}

.navtag1 {
  color: #42b983;
  font-size: 46px;
  padding: 10px 0px 0px 40px;
}
.form-control {
  padding: 10px 0px 8px 115px;
  border: 3px solid white;
}

.nav-item {
  font-size: 20px;
}
.bar2 {
  color: aliceblue;
}
.navbar-toggler {
  background-color: white;
  color: black !important;
}
.bar1 {
  background-color: black;
}
.bar2 {
  background-color: black;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
  font-size: 24px;
  color: white;
  background-color: black;
}
.btn {
  background-color: black !important;
}
.cardd {
}
.searchdata {
  background-color: black;
}

.d-flex {
  height: 100%;
  background-color: #1f2833;
  padding: 0px 0px 0px 14px;
  font-size: 16px;
}
h5 {
  color: white;
  /* font-size: 79%; */
  font-size: 1.25rem
}

.title {
  background-color: #1f2833;
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
  /* padding: 0px 0px 25px 0px; */
}
.card-title{
  /* font-size: 108%; */
}
/* ::-moz-scrollbar {
  width: 20px;
  height: 20px;
}
::-moz-scrollbar-thumb {
  background: linear-gradient(to bottom, #ff850a, #ff3474);
  border-radius: 50px;
}
::-moz-scrollbar-track {
  background: #474747;
} */
@media only screen and (max-width: 576px) {
}
</style>
