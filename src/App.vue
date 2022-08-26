<template>
  <div>
    <Header />
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
img {
}
</style>
