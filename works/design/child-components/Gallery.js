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
          fullSize: "https://i.imgs.ovh/2025/12/05/CDR0pX.jpeg",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDR0pX.md.jpeg",
        },
        {
          id: 2,
          fullSize: "https://i.imgs.ovh/2025/12/05/CDA1xN.jpeg",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDA1xN.md.jpeg",
        },
        {
          id: 3,
          fullSize: "https://i.imgs.ovh/2025/12/05/CDAxiC.jpeg",
          thumbnail: "https://i.imgs.ovh/2025/12/05/CDAxiC.md.jpeg",
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
