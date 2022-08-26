import axios from "axios";

// const API_KEY = "AIzaSyA19Zh_YbwiqewfcVtE7-_c_FIyJIniMl0";
const API_KEY = "FAKE";

export default {
  fetchVideos(term) {
    return axios("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: API_KEY,
        type: "video",
        part: "snippet",
        q: term,
      },
    });
  },
};
