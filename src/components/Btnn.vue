<template>
  <div class="btnn">
    <!-- <button class="btn">480P</button>

    <button class="btn">780P</button>
    <button class="btn">1080P</button>
    <button class="btn">2160P 4K</button>-->
    <abutton class="btn" href="/">POPULAR MOVIES</abutton>
    <a button class="btn" href="/">BOLLYWOOD</a>
    <a button class="btn" href="/">HOLLYWOOD</a>
    <a button class="btn" href="/">TOLLYWOOD</a>
    <a button class="btn" href="/">WEB-SERIES</a>
    <a button class="btn" href="/">HINDI DUBBED MOVIES</a>
    <a button class="btn" href="/">ENGLISH</a>
    <a button class="btn" href="/">ANIEME</a>
    <a button class="btn" href="/">NETFLIX</a>
    <a button class="btn" href="/">PRIME</a>
    <a button class="btn" href="/">AMAZON PRIME</a>
    <a button class="btn" href="/">DISNEY+</a>
    <a button class="btn" href="/">APPLE TV+</a>
    <a button class="btn" href="/">K-DRAMA SERIES</a>
    <a button class="btn" href="/">NEWS</a>

    <!-- <router-link class="btn" to="/Newss">News</router-link> -->
  </div>
</template>

<script>
export default {
  name: "Btnn"
};
</script>

<style scoped>
.btnn {
  background-color: black;
  padding: 35px 1px 15px 10px;
}
.btn {
  background-color: #df133c;
  /* display: flex; */
  border-radius: 15%;
  display: inline-block;
  box-shadow: 0px 0px 32px -10px #fe0000;
  padding: 15px 4px;
  transition-duration: 0.4s;
  margin: 4px 2px;
  text-align: center;
  font-family: poppins, sans-serif;
  color: whitesmoke;
}
</style>