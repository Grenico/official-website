export default {
  template: /*html*/ `
  <div class="headbar">
  <h1>视频</h1>
  </div>
  <div class="media-area">
  <div class="media-card" v-for="media in allMedia" @click="openVideo(media)">
  <div class="img-container">
  <img :src="media.thumbnail" :alt="media.id" loading="lazy">
  <div class="play-icon">
  <i class="fa-regular fa-circle-play"></i>
  </div>
  </div>
  <div class="media-info">
  <p>{{media.title}}</p>
  </div>
  </div>
<div class="video-player" v-if="display">
<button class="close-btn fa-solid fa-xmark " @click="close">
</button>
<iframe class="video" :src="href" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
 </div>
  </div>
`,

  data() {
    return {
      title: "媒体数据",
      href: "",
      display: false,
      allMedia: [
        {
          id: 1,
          bvid: "BV1ws411o763",
          title: "【野良神】汝为有缘人",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CD5df6.md.jpeg",
        },
        {
          id: 2,
          bvid: "BV1Zs41197gB",
          title: "【血界战线】I was so depressed that I had given up",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CD5oQc.md.jpeg",
        },
        {
          id: 3,
          bvid: "BV1os411R7EA",
          title: "【血界战线】Over my head",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CD54mp.md.jpeg",
        },
        {
          id: 4,
          bvid: "BV1Ns411i7EA",
          title: "【甲铁城/AMV/燃向】整理行装，继续旅程",
          thumbnail: "https://i.imgs.ovh/2026/01/08/yZh6Xc.md.jpeg",
        },
        {
          id: 5,
          bvid: "BV1wj3wecEp4",
          title: "【城市记录】麓湖公园近旁",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CD5YT9.md.jpeg",
        },
        {
          id: 6,
          bvid: "BV1xZoLYBEAw",
          title: "【S4U x VA-11 HALL-A混剪】直觉敏锐而不甘",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CD5H1m.md.jpeg",
        },
      ],
    };
  },
  methods: {
    openVideo(mediaItem) {
      this.href = `//player.bilibili.com/player.html?isOutside=true&bvid=${mediaItem.bvid}`;
      console.log(this.href);
      this.display = true;
    },
    close() {
      this.display = false;
    },
  },
};
