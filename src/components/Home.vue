<template>
  <div>
    <div class="container">
      <input @input="onChange" placeholder="Search here" />
    </div>
    <div class="row col justify-content-center">
      <div class="col-md-8">
        <PlayVideo />
      </div>
      <div class="col-md-4">
        <VideoList />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VideoList from "./VideoList";
import PlayVideo from "./PlayVideo";
export default {
  name: "Home",
  components: {
    VideoList,
    PlayVideo,
  },
  computed: mapGetters(["videoStore"]),
  methods: {
    ...mapActions(["getVideos"]),
    onChange(e) {
      this.getVideos(e.target.value);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 40px;
  font-weight: 800;
  font-family: serif;
}

.container {
  padding: 20px 0px 30px 0px;
  display: flex;
  justify-content: center;
}
input {
  height: 40px;
  width: 400px;
  margin-bottom: 10px;
  font-size: 20px;
  padding: 5px 5px 5px 10px;
}
</style>
