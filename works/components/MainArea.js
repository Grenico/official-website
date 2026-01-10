import SideBar from "./SideBar.js";
import ContentArea from "./ContentArea.js";

export default {
  components: { SideBar, ContentArea },
  template: /*html*/ `
  <div class="main-area">
  <div class="mobile-headbar">
  <h1 class="headbar-text" @click="toHome">GRENICO</h1>
  </div>
  <side-bar @category-selected="handleSidebarEvent" :highlight-category="highlightCategory" :showSidebar="sidebarStatus"></side-bar>
  <content-area :show-iframe="showIframe" :iframe-src="iframeSrc" @panel-selected="handlePanelEvent" @scroll="handleScrollEvent"></content-area>
  </div>
  `,
  data() {
    return {
      showIframe: false,
      iframeSrc: "",
      highlightCategory: "全部",
      sidebarStatus: false,
    };
  },
  methods: {
    handleSidebarEvent(data) {
      if (data.categoryName === "全部") {
        this.showIframe = false;
        this.iframeSrc = "";
        this.highlightCategory = "全部"; //点击侧边栏“全部”时，高亮名称为“全部”
      } else {
        this.showIframe = true;
        this.iframeSrc = data.iframeSrc;
        this.highlightCategory = data.categoryName; //点击侧边栏对应分类时，高亮名称为对应分类
      }
      this.sidebarStatus = false;
    },
    handlePanelEvent(data) {
      this.showIframe = true;
      this.iframeSrc = data.iframeSrc;
      this.highlightCategory = data.panelTypeName; // 点击面板时，高亮名称为面板名称
    },
    handleScrollEvent(data) {
      if (window.innerWidth <= 768) {
        if (data.scrollTop > 20) {
          this.sidebarStatus = true;
        } else {
          this.sidebarStatus = false;
        }
      } else {
        this.sidebarStatus = true;
      }
    },
    toHome() {
      window.location.href = "/home/index.html";
    },
  },
};
