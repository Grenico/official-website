import AllPanels from "./AllPanels.js";

export default {
  components: { AllPanels },
  template: /*html */ `
    <div class="content-area">
    <p v-if="!showIframe" class="works">作品一览</p>
    <all-panels v-if="!showIframe" @panel-selected="handlePanelEvent" ></all-panels>
    <div class="loadingAnimation" v-loading="loading" element-loading-background="#d0dfee">
    <iframe v-if="showIframe"  @load="onIframeLoaded" :src="iframeSrc" style="width:100%;height:100vh;border:none;" frameborder="0" allow-scripts allow-same-origin ></iframe>
  </div>
    </div>
    `,
  props: {
    showIframe: {
      type: Boolean,
      default: false,
    },
    iframeSrc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    // 监听 iframeSrc 变化，开始加载
    iframeSrc(newVal) {
      if (newVal) {
        this.loading = true;
      }
    },
    // 监听 showIframe 变化
    showIframe(newVal) {
      if (newVal) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    },
  },
  mounted() {
    // 监听来自 iframe 的消息
    window.addEventListener("message", this.handleIframeMessage);
  },

  beforeDestroy() {
    window.removeEventListener("message", this.handleIframeMessage);
  },
  methods: {
    handlePanelEvent(data) {
      this.$emit("panel-selected", data);
    },
    handleIframeMessage(event) {
      // 确保消息来自可信源
      if (event.data.type === "scroll") {
        this.$emit("scroll", { scrollTop: event.data.scrollTop });
      }
    },
    onIframeLoaded() {
      this.loading = false; //加载完成后关闭加载动画
    },
  },
};
