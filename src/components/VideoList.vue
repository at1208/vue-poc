<template>
  <div class="list">
    <div v-for="video in videoList">
      <VideoListItem :data="video" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  methods: mapGetters(["videoStore"]),
  computed: {
    videoList() {
      return this.videoStore().slice(1);
    },
  },
  components: {
    VideoListItem,
  },
};
</script>

<style scoped>
.list {
  display: grid;
  grid-gap: 10px;
}
</style>
