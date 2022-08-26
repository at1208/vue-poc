import api from "../../api/youtube";

const state = {
  videos: [
    // {
    //   kind: "youtube#searchResult",
    //   etag: "YnfhEkBDEBomMuA41X4Ybnep3Zw",
    //   id: {
    //     kind: "youtube#video",
    //     videoId: "_nAu9D-8srA",
    //   },
    //   snippet: {
    //     publishedAt: "2018-02-27T07:00:01Z",
    //     channelId: "UCUYA9nNP2Pgz5RF_oMvnqdQ",
    //     title: "Учим цвета Разноцветные яйца на ферме Miroshka Tv",
    //     description:
    //       "Улыбающиеся яйца на ферме меняют цвета,разбиваются,меняют форму. Выучи 6 цветов: черный, коричневый, розовый, ...",
    //     thumbnails: {
    //       default: {
    //         url: "https://i.ytimg.com/vi/_nAu9D-8srA/default.jpg",
    //         width: 120,
    //         height: 90,
    //       },
    //       medium: {
    //         url: "https://i.ytimg.com/vi/_nAu9D-8srA/mqdefault.jpg",
    //         width: 320,
    //         height: 180,
    //       },
    //       high: {
    //         url: "https://i.ytimg.com/vi/_nAu9D-8srA/hqdefault.jpg",
    //         width: 480,
    //         height: 360,
    //       },
    //     },
    //     channelTitle: "Мирошка ТВ",
    //     liveBroadcastContent: "none",
    //     publishTime: "2018-02-27T07:00:01Z",
    //   },
    // },
    // {
    //   kind: "youtube#searchResult",
    //   etag: "BszWRqlsjONIHX2EjKXMVlVQBF4",
    //   id: {
    //     kind: "youtube#video",
    //     videoId: "hq3yfQnllfQ",
    //   },
    //   snippet: {
    //     publishedAt: "2014-03-06T20:57:50Z",
    //     channelId: "UCBnZ16ahKA2DZ_T5W0FPUXg",
    //     title:
    //       "Phonics Song with TWO Words - A For Apple - ABC Alphabet Songs with Sounds for Children",
    //     description:
    //       "To download and watch this video anywhere and at any time, get the ChuChu TV Pro app now by clicking the below link!",
    //     thumbnails: {
    //       default: {
    //         url: "https://i.ytimg.com/vi/hq3yfQnllfQ/default.jpg",
    //         width: 120,
    //         height: 90,
    //       },
    //       medium: {
    //         url: "https://i.ytimg.com/vi/hq3yfQnllfQ/mqdefault.jpg",
    //         width: 320,
    //         height: 180,
    //       },
    //       high: {
    //         url: "https://i.ytimg.com/vi/hq3yfQnllfQ/hqdefault.jpg",
    //         width: 480,
    //         height: 360,
    //       },
    //     },
    //     channelTitle: "ChuChu TV Nursery Rhymes & Kids Songs",
    //     liveBroadcastContent: "none",
    //     publishTime: "2014-03-06T20:57:50Z",
    //   },
    // },
    // {
    //   kind: "youtube#searchResult",
    //   etag: "mjDA0EUsRA4g2yA-EugwEM1DeSU",
    //   id: {
    //     kind: "youtube#video",
    //     videoId: "mJmyiQCDuIw",
    //   },
    //   snippet: {
    //     publishedAt: "2022-08-24T22:00:11Z",
    //     channelId: "UCqDauP_ke8Lwt8Hg3Xv-8Iw",
    //     title:
    //       "A MÉDICA LOUCA TIROU O UNIFORME E REVELOU TUDO - JULIANA BALTAR",
    //     description:
    //       "A médica louca chegou ao fim. Ela finalmente foi embora mas antes tirou seu uniforme e fez revelações chocantes! Assistam até ...",
    //     thumbnails: {
    //       default: {
    //         url: "https://i.ytimg.com/vi/mJmyiQCDuIw/default.jpg",
    //         width: 120,
    //         height: 90,
    //       },
    //       medium: {
    //         url: "https://i.ytimg.com/vi/mJmyiQCDuIw/mqdefault.jpg",
    //         width: 320,
    //         height: 180,
    //       },
    //       high: {
    //         url: "https://i.ytimg.com/vi/mJmyiQCDuIw/hqdefault.jpg",
    //         width: 480,
    //         height: 360,
    //       },
    //     },
    //     channelTitle: "Juliana Baltar",
    //     liveBroadcastContent: "none",
    //     publishTime: "2022-08-24T22:00:11Z",
    //   },
    // },
    // {
    //   kind: "youtube#searchResult",
    //   etag: "NKhn1kll8CfOedeE6uV_NmhcAfw",
    //   id: {
    //     kind: "youtube#video",
    //     videoId: "h-sruPjj9ro",
    //   },
    //   snippet: {
    //     publishedAt: "2022-08-25T07:03:36Z",
    //     channelId: "UCwYXx_u_kul9C1Gk-qlveBQ",
    //     title:
    //       "Monster School: Mommy Long Legs have a baby - Pregnant Challenge 3 | Minecraft Animation",
    //     description:
    //       "Monster School: Mommy Long Legs have a baby - Pregnant Challenge 3 | Minecraft Animation #WOAVIDEOS ...",
    //     thumbnails: {
    //       default: {
    //         url: "https://i.ytimg.com/vi/h-sruPjj9ro/default.jpg",
    //         width: 120,
    //         height: 90,
    //       },
    //       medium: {
    //         url: "https://i.ytimg.com/vi/h-sruPjj9ro/mqdefault.jpg",
    //         width: 320,
    //         height: 180,
    //       },
    //       high: {
    //         url: "https://i.ytimg.com/vi/h-sruPjj9ro/hqdefault.jpg",
    //         width: 480,
    //         height: 360,
    //       },
    //     },
    //     channelTitle: "WOA Monster School",
    //     liveBroadcastContent: "none",
    //     publishTime: "2022-08-25T07:03:36Z",
    //   },
    // },
    // {
    //   kind: "youtube#searchResult",
    //   etag: "EHwLflAkcOXRgi2fmfR99gGM2X0",
    //   id: {
    //     kind: "youtube#video",
    //     videoId: "BKajkqI1byI",
    //   },
    //   snippet: {
    //     publishedAt: "2022-08-24T14:18:04Z",
    //     channelId: "UCTLZ1jlmY-VogpQXng48iKQ",
    //     title:
    //       "LIVING IN A STATIONERY SHOP FOR 24 HRS | BIGGEST STATIONERY CHALLENGE | HUNGRY BIRDS",
    //     description:
    //       "Buy our Cool Tshirts here = https://hungrybirds.shop/ Please guys show your love and support and do subscribe to our new ...",
    //     thumbnails: {
    //       default: {
    //         url: "https://i.ytimg.com/vi/BKajkqI1byI/default.jpg",
    //         width: 120,
    //         height: 90,
    //       },
    //       medium: {
    //         url: "https://i.ytimg.com/vi/BKajkqI1byI/mqdefault.jpg",
    //         width: 320,
    //         height: 180,
    //       },
    //       high: {
    //         url: "https://i.ytimg.com/vi/BKajkqI1byI/hqdefault.jpg",
    //         width: 480,
    //         height: 360,
    //       },
    //     },
    //     channelTitle: "Hungry Birds",
    //     liveBroadcastContent: "none",
    //     publishTime: "2022-08-24T14:18:04Z",
    //   },
    // },
  ],
  selectedVideo: null,
};

const getters = {
  videoStore: (state) => state.videos,
  selectedVideo: (state) => state.selectedVideo,
};

const actions = {
  async getVideos({ commit }, term) {
    const response = await api.fetchVideos(term);
    commit("setVideos", response.data.items);
  },
  videoSelect({ commit }, video) {
    commit("setSelectedVideo", video);
  },
};

const mutations = {
  setVideos: (state, videos) => (state.videos = videos),
  setSelectedVideo: (state, video) => (state.selectedVideo = video),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
