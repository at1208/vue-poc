<template>
  <div>
    <div class="embed-responsive embed-responsive-16by9 v-detail">
      <iframe
        class="embed-responsive-item"
        :src="`https://www.youtube.com/embed/${video().id.videoId}`"
      />
    </div>
    <div class="details">
      <h4>{{ video().snippet.title }}</h4>
      <p>{{ video().snippet.description }}</p>

      <table>
        <tbody>
          <tr>
            <td><b>Channel Id</b>: {{ video().snippet.channelId }}</td>
            <td><b>Channel Title</b>: {{ video().snippet.channelTitle }}</td>
            <td><b>Publish Time</b>: {{ video().snippet.publishTime }}</td>
            <td><b>Published At</b>: {{ video().snippet.publishedAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VideoDetail",
  methods: {
    ...mapGetters(["videoStore"]),
    video() {
      return this.videoStore().find(
        (v) => v.id.videoId == this.$route.path.slice(1)
      );
    },
  },
};
</script>

<style scoped>
.v-detail {
}
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
