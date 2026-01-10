import ContentPanel from "./ContentPanel.js";

export default {
  components: { ContentPanel },
  template: /*html */ `
  <div class="all-panels" >
  <content-panel v-for="panelType of panelTypes" @click="onTarget(panelType)" :title="panelType.name" :iconClass="panelType.iconClass"></content-panel>
</div>
    `,
  data() {
    return {
      title: "面板分类",
      panelTypes: [
        {
          id: 1,
          name: "文字",
          src: "https://grenico.github.io/official-website/works/text/text.html",
          iconClass: "fa-regular fa-file-lines",
        },
        {
          id: 2,
          name: "绘画",
          src: "https://grenico.github.io/official-website/works/painting/painting.html",
          iconClass: "fa-solid fa-palette",
        },
        {
          id: 3,
          name: "摄影",
          src: "https://grenico.github.io/official-website/works/photo/photo.html",
          iconClass: "fa-regular fa-camera",
        },
        {
          id: 4,
          name: "设计",
          src: "https://grenico.github.io/official-website/works/design/design.html",
          iconClass: "fas fa-draw-polygon",
        },
        {
          id: 5,
          name: "视频",
          src: "https://grenico.github.io/official-website/works/video/video.html",
          iconClass: "fas fa-film",
        },
        {
          id: 6,
          name: "音乐",
          src: "https://grenico.github.io/official-website/works/music/music.html",
          iconClass: "fa-classic fa-music",
        },
      ],
    };
  },
  methods: {
    onTarget(panelType) {
      this.$emit("panel-selected", {
        iframeSrc: panelType.src,
        panelTypeName: panelType.name,
      });
    },
  },
};
