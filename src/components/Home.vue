<template>
  <div>
    <section class="page p-5">
      <div class="container-fluid">
        <div class="row text-center">
          <h1>Most Popular Movies</h1>
          <div class="col-sm-6 col-md-4 col-lg-3 p-3" v-for="items in data" :key="items.id">
            <div class="card">
              <div class="poster">
                <img
                  class="card-img-top"
                  :src="'http://image.tmdb.org/t/p/w500/'+items.poster_path"
                  alt="Card image cap"
                />
              </div>
              <div class="card-content">
                <div class="title px-3 pt-3">
                  <h5 class="card-title">{{items.title}}</h5>
                </div>
                <div class="d-flex flex-row">
                  <div class="rd release-date d-flex flex-column text-left p-3">
                    <div>Release date</div>
                    <div class="date">{{items.release_date}}</div>
                  </div>
                  <div class="rt rating p-3">
                    <div>Rating☆</div>
                    <div>{{items.vote_average}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let result = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=9fa1cdec11613f5b86e56e4f3d32ebca"
      );
      console.log(result.data);
      this.data = result.data.results;
    }
  }
};
</script>

<style scoped>
.page {
  background-color: black;
}
.card-content {
  background-color: #1f2833;
}
.card {
  border: #0b0c10;
  height: 100%;
  background-color: #1f2833;
}
.card-title {
  font-size: 1.5rem;
}
.d-flex {
  padding: 0px 0px 0px 20px;
  font-size: 1rem;
}

.d-flex:hover {
  /* color: #df133c; */
}

h1 {
  color: #42b983;
}
h5 {
  color: whitesmoke;
}
h5:hover {
  color: #df133c;
}
.rd {
  color: whitesmoke;
}
.rt {
  color: whitesmoke;
}
@media only screen and (max-width: 576px) {
  .d-flex {
    padding: 0px 0px 0px 0px;
    font-size: 12.5px;
  }
}
</style>