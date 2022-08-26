import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import VideoDetail from "../components/VideoDetail";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    {
      path: "/:id",
      component: VideoDetail,
      props: true,
    },
  ],
});
