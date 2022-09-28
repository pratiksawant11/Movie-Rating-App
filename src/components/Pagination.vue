<template>
  <div>
    <ul class="pagi pagination m-0">
      <li class="page-item">
        <a class="page-link" href="#">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "Pagination"
};
</script>

<style scoped>
.pagi {
  background-color: black;
  padding: 0px 0px 0px 540px;
}
.page-link {
  color: black;
}
@media only screen and (max-width: 576px) {
  .pagi {
    padding: 0px 0px 0px 64px;
  }
}
</style>