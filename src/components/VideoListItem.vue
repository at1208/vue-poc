<template>
  <div>
    <div @click="onSelect([data])" class="root">
      <div class="container row col">
        <div class="col-md-7 col-xs-12">
          <img :src="data.snippet.thumbnails.high.url" class="video-img" />
        </div>
        <div class="details col-md-5 col-xs-12">
          <h4 class="title">{{ data.snippet.title }}</h4>
        </div>
        <div>
          <p class="desc">
            {{ data.snippet.description }}
            <router-link :to="{ path: data.id.videoId }"
              ><small @click="onSelect">See more</small>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "VideoListItem",
  props: {
    data: Object,
  },

  methods: {
    ...mapActions(["videoSelect"]),
    onSelect(data) {
      this.videoSelect(data);
    },
  },
};
</script>

<style scoped>
.root {
  cursor: pointer;
}
.container {
  /* margin: 15px 0px; */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.video-img {
  width: 100%;
}
.details {
  padding: 10px;
}
.title {
  font-size: 15px;
}
.desc {
  font-size: 13px;
}
.col-md-7 {
  padding: 3px;
}
.col-md-5 {
  padding: 5px;
}
</style>
