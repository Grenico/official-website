import AllPanels from "./AllPanels.js";

export default {
  components: { AllPanels },
  template: /*html */ `
    <div class="content-area">
    <p v-if="!showIframe" class="works">作品一览</p>
    <all-panels v-if="!showIframe" @panel-selected="handlePanelEvent" ></all-panels>
    <iframe v-if="showIframe" :src="iframeSrc" style="width:100%;height:100vh;border:none;" frameborder="0" allow-scripts allow-same-origin ></iframe>
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
  },
};
