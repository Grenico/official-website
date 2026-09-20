export default {
  template: /*html*/ `
  <div class="headbar">
  <h1>设计</h1>
  </div>
  <div class="gallery">
  <div class="gallery-column" v-for="(column, columnIndex) in columns" :key="columnIndex">
  <div class="img-containers" v-for="img in column" :key="img.id" >
  <el-image :src="img.thumbnail" :alt="img.id" :preview-src-list="previewList" preview-teleported :initial-index="img.id-1" fit="cover" loading="lazy" hide-on-click-modal>
  </el-image>
  </div>
  </div>
  </div>
    `,
  data() {
    return {
      windowWidth: window.innerWidth,
      title: "图片数据",
      imgs: [
        {
          id: 1,
          fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/设计/1789882617711_招新海报，背面_北校_.jpg",
          thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/设计/1789882617711_招新海报，背面_北校_.jpg",
        },
        {
          id: 2,
          fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/设计/1789882622385_招新传单-正面.jpg",
          thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/设计/1789882622385_招新传单-正面.jpg",
        },
      ],
    };
  },
  computed: {
    previewList() {
      return this.imgs.map((img) => img.fullSize);
    },
    columns() {
      // 根据窗口宽度决定列数
      const columnCount = this.windowWidth <= 768 ? 2 : 4;

      // 创建对应列数的空数组
      const columns = Array.from({ length: columnCount }, () => []);

      // 将图片均匀分配到各列
      this.imgs.forEach((img, index) => {
        const columnIndex = index % columnCount;
        columns[columnIndex].push(img);
      });

      return columns;
    },
  },
  // 将图片均匀分配到列中
};
