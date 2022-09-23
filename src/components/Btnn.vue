<template>
  <div class="btnn">
    <button class="btn">480P</button>

    <button class="btn">780P</button>
    <button class="btn">1080P</button>
    <button class="btn">2160P 4K</button>
    <button class="btn">POPULAR MOVIES</button>
    <button class="btn">BOLLYWOOD</button>
    <button class="btn">HOLLYWOOD</button>
    <button class="btn">TOLLYWOOD</button>
    <button class="btn">WEB-SERIES</button>
    <button class="btn">HINDI DUBBED MOVIES</button>
    <button class="btn">ENGLISH</button>
    <button class="btn">ANIEME</button>
    <button class="btn">NETFLIX</button>
    <button class="btn">PRIME</button>
    <button class="btn">AMAZON PRIME</button>
    <button class="btn">DISNEY+</button>
    <button class="btn">APPLE TV+</button>
    <button class="btn">K-DRAMA SERIES</button>
    <button class="btn">NEWS</button>
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