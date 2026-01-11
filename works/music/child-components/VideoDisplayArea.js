export default {
  template: /*html*/ `
  <div class="headbar">
  <h1>音乐</h1>
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
          bvid: "BV1Jd4y1H7dJ",
          title:
            "[个人扒谱] RADWIMPS ‐「デート」（动画电影《你的名字。》插曲）",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDDhor.md.jpeg",
        },
        {
          id: 2,
          bvid: "BV1Gz4y1q7X1",
          title: "夏日约定与在日落时分起舞",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDDBut.md.jpeg",
        },
        {
          id: 3,
          bvid: "BV1Ao4y1g7i1",
          title: "原创 | 钢琴曲-F调《小径漫步》",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDDuUe.md.jpeg",
        },
        {
          id: 4,
          bvid: "BV1BN411C7cW",
          title: "纯音乐 | 森林，浓雾之夜",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDDxWa.md.jpeg",
        },
        {
          id: 5,
          bvid: "BV1tN411y7g6",
          title: "原创歌曲 | 成为过去的夏季",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDDwrq.md.jpeg",
        },
        {
          id: 6,
          bvid: "BV16t11YnEXR",
          title: "纯音乐 | Homesick",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDDIgM.md.jpeg",
        },
        {
          id: 7,
          bvid: "BV12mXTYBEc5",
          title: "纯音乐 | 水乡雨后",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDDG3h.md.jpeg",
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
