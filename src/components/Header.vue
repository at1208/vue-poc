<template>
  <div class="container root">
    <img
      class="logo"
      src="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.logo {
  height: 50px;
}
.root {
  /* background-color: #f5faff; */
  padding: 10px 10px;
  display: flex;
  align-items: left;
  border-bottom: 1px solid lightgrey;
  justify-content: left;
}
.title {
  font-size: 40px;
  font-weight: 800;
  font-family: monospace;
}
</style>
