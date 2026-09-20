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
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883422533_长拳.jpg",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883422533_长拳.jpg",
  },
  {
    id: 2,
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883327001_模仿1.jpg",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883327001_模仿1.jpg",
  },
  {
    id: 3,
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883321255_房间照片临摹.jpg",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883321255_房间照片临摹.jpg",
  },
  {
    id: 4,
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883321421_武当.jpg",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883321421_武当.jpg",
  },
  {
    id: 5,
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883317074_太极.jpg",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883317074_太极.jpg",
  },
  {
    id: 6,
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883319349_南枝.jpg",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883319349_南枝.jpg",
  },
  {
    id: 7,
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883312555_南拳.jpg",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883312555_南拳.jpg",
  },
  {
    id: 8,
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883315491_模仿3.jpg",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883315491_模仿3.jpg",
  },
  {
    id: 9,
    thumbnail: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883316318_乱涂的.png",
    fullSize: "https://cloudflare-imgbed-cg4.pages.dev/file/绘画/1789883316318_乱涂的.png",
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
