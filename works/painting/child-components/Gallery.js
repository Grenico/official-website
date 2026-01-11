export default {
  template: /*html*/ `
  <div class="headbar">
  <h1>绘画</h1>
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
      windowWidth: window.innerWidth, // 添加窗口宽度监听
      title: "图片数据",
      imgs: [
        {
          id: 1,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGEbq.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGEbq.jpeg",
        },
        {
          id: 2,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGYEa.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGYEa.jpeg",
        },
        {
          id: 3,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGoit.md.png",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGoit.png",
        },
        {
          id: 4,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGuEQ.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGuEQ.jpeg",
        },
        {
          id: 5,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGd2C.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGd2C.jpeg",
        },
        {
          id: 6,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGlB4.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGlB4.jpeg",
        },
        {
          id: 7,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGKFA.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGKFA.jpeg",
        },
        {
          id: 8,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGp9N.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGp9N.jpeg",
        },
        {
          id: 9,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGIIH.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGIIH.jpeg",
        },
        {
          id: 10,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOGGaU.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOGGaU.jpeg",
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
