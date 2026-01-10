export default {
  template: /*html */ `
  <div class="side-bar" :class="{'mobile-show':showSidebar}">
  <ul style="padding-left: 0">
    <button class="home" @click="toHome">GRENICO</button>
    <ul class="category">
      <li v-for="contentType in contentTypes" @click="onTarget(contentType)" :class="{selected:isSelected(contentType)}">
      <span>{{contentType.name}}
      </span>
      </li>
    </ul>
  </ul>
</div>
    `,
  data() {
    return {
      title: "侧边栏分类",
      contentTypes: [
        { id: 1, name: "全部", src: "" },
        { id: 2, name: "文字", src: "/works/text/text.html" },
        { id: 3, name: "绘画", src: "/works/painting/painting.html" },
        { id: 4, name: "摄影", src: "/works/photo/photo.html" },
        { id: 5, name: "设计", src: "/works/design/design.html" },
        { id: 6, name: "视频", src: "/works/video/video.html" },
        { id: 7, name: "音乐", src: "/works/music/music.html" },
      ],
    };
  },
  props: {
    // 要高亮的分类取决于MainArea中传回的分类名字
    highlightCategory: {
      type: String,
      default: "全部",
    },
    showSidebar: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onTarget(contentType) {
      //将所点击的分类名称、链接发送给MainArea
      this.$emit("category-selected", {
        iframeSrc: contentType.src,
        categoryName: contentType.name,
      });
    },
    toHome() {
      window.location.href = "https://grenico.github.io/official-website/home/";
    },
    isSelected(contentType) {
      return this.highlightCategory === contentType.name;
      //当传回的分类名字 = 侧边栏某个分类的名称时，高亮它
    },
  },
};
