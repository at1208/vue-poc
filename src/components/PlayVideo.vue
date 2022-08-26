<template>
  <div>
    <div v-if="this.selectedVideo()">
      <div v-for="v in this.selectedVideo()">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item img"
            :src="`https://www.youtube.com/embed/${v.id.videoId}`"
          />
        </div>
        <div class="details">
          <h4>{{ v.snippet.title }}</h4>
          <p>{{ v.snippet.description }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="v in video">
        <div class="embed-responsive embed-responsive-16by9" n>
          <iframe class="embed-responsive-item" :src="v.url" />
        </div>
        <div class="details">
          <h4>{{ v.snippet.title }}</h4>
          <p>{{ v.snippet.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PlayVideo",
  methods: {
    ...mapGetters(["videoStore"]),
    ...mapGetters(["selectedVideo"]),
  },
  computed: {
    video() {
      return this.videoStore()
        .slice(0, 1)
        .map((v) => {
          return { ...v, url: `https://www.youtube.com/embed/${v.id.videoId}` };
        });
    },
  },
};
</script>

<style scoped>
.root {
  cursor: pointer;
}
.img {
  width: 100%;
}
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
