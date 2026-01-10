export default {
  template: /*html*/ `
  <div class="headbar">
  <h1>摄影</h1>
  </div>
  <div class="gallery">
  <div class="gallery-column" v-for="(column, columnIndex) in columns" :key="columnIndex">
  <div class="img-containers" v-for="img in column" :key="img.id" >
  <el-image :src="img.src" :alt="img.id" :preview-src-list="previewList" preview-teleported :initial-index="img.id-1" fit="cover" loading="lazy" hide-on-click-modal>
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
        { id: 1, src: "https://i.imgs.ovh/2026/01/07/yOusuL.jpeg" },
        { id: 2, src: "https://i.imgs.ovh/2026/01/07/yOueQn.jpeg" },
        { id: 3, src: "https://i.imgs.ovh/2026/01/07/yOu53b.jpeg" },
        { id: 4, src: "https://i.imgs.ovh/2026/01/07/yOuvYF.jpeg" },
        { id: 5, src: "https://i.imgs.ovh/2026/01/07/yOurRQ.jpeg" },
        { id: 6, src: "https://i.imgs.ovh/2026/01/07/yOufCX.jpeg" },
        { id: 7, src: "https://i.imgs.ovh/2026/01/07/yOujtU.jpeg" },
        { id: 8, src: "https://i.imgs.ovh/2026/01/07/yOuZcN.jpeg" },
        { id: 9, src: "https://i.imgs.ovh/2026/01/07/yOuymA.jpeg" },
        { id: 10, src: "https://i.imgs.ovh/2026/01/07/yOmhLn.jpeg" },
        { id: 11, src: "https://i.imgs.ovh/2026/01/07/yOmlC0.jpeg" },
        { id: 12, src: "https://i.imgs.ovh/2026/01/07/yOmElg.jpeg" },
        { id: 13, src: "https://i.imgs.ovh/2026/01/07/yOmJG6.png" },
        { id: 14, src: "https://i.imgs.ovh/2026/01/07/yOmHMp.jpeg" },
        { id: 15, src: "https://i.imgs.ovh/2026/01/07/yOm2Lc.jpeg" },
        { id: 16, src: "https://i.imgs.ovh/2026/01/07/yOmWw9.jpeg" },
        { id: 17, src: "https://i.imgs.ovh/2026/01/07/yOmQHm.jpeg" },
        { id: 18, src: "https://i.imgs.ovh/2026/01/07/yOmPAF.png" },
        { id: 19, src: "https://i.imgs.ovh/2026/01/07/yOmM7Q.png" },
        { id: 20, src: "https://i.imgs.ovh/2026/01/07/yOm9dX.png" },
        { id: 21, src: "https://i.imgs.ovh/2026/01/07/yOms6U.png" },
        { id: 22, src: "https://i.imgs.ovh/2026/01/07/yOmqS4.png" },
        { id: 23, src: "https://i.imgs.ovh/2025/12/05/C9iVLM.jpeg" },
        { id: 24, src: "https://i.imgs.ovh/2025/12/05/C9iTwx.jpeg" },
        { id: 25, src: "https://i.imgs.ovh/2025/12/05/C9NhHA.jpeg" },
        { id: 26, src: "https://i.imgs.ovh/2025/12/05/C9Ntdq.jpeg" },
        { id: 27, src: "https://i.imgs.ovh/2025/12/05/C9Nl5t.jpeg" },
        { id: 28, src: "https://i.imgs.ovh/2025/12/05/C9NoDh.jpeg" },
        { id: 29, src: "https://i.imgs.ovh/2025/12/05/C9NnzL.jpeg" },
        { id: 30, src: "https://i.imgs.ovh/2025/12/05/C9NeDg.jpeg" },
        { id: 31, src: "https://i.imgs.ovh/2025/12/05/C9N8Fd.jpeg" },
        { id: 32, src: "https://i.imgs.ovh/2025/12/05/C9N5XO.jpeg" },
        { id: 33, src: "https://i.imgs.ovh/2025/12/05/C9Nq26.jpeg" },
        { id: 34, src: "https://i.imgs.ovh/2025/12/05/C9Ng0c.jpeg" },
        { id: 35, src: "https://i.imgs.ovh/2025/12/05/C9NAE9.jpeg" },
        { id: 36, src: "https://i.imgs.ovh/2025/12/05/C9NbaF.jpeg" },
        { id: 37, src: "https://i.imgs.ovh/2025/12/05/C9NUIQ.jpeg" },
        { id: 38, src: "https://i.imgs.ovh/2025/12/05/C9NT9X.jpeg" },
        { id: 39, src: "https://i.imgs.ovh/2025/12/05/C9NLFU.jpeg" },
        { id: 40, src: "https://i.imgs.ovh/2025/12/05/C9NFBH.jpeg" },
        { id: 41, src: "https://i.imgs.ovh/2025/12/05/C9NvnN.jpeg" },
        { id: 42, src: "https://i.imgs.ovh/2025/12/05/C9NrbA.jpeg" },
        { id: 43, src: "https://i.imgs.ovh/2025/12/05/C9Nci4.jpeg" },
        { id: 44, src: "https://i.imgs.ovh/2025/12/05/C9NjEC.jpeg" },
        { id: 45, src: "https://i.imgs.ovh/2025/12/05/C9Naqq.jpeg" },
        { id: 46, src: "https://i.imgs.ovh/2025/12/05/C9NZZt.jpeg" },
        { id: 47, src: "https://i.imgs.ovh/2025/12/05/C9NyIa.jpeg" },
        { id: 48, src: "https://i.imgs.ovh/2025/12/05/C9N7vh.jpeg" },
        { id: 49, src: "https://i.imgs.ovh/2025/12/05/C93iBr.jpeg" },
        { id: 50, src: "https://i.imgs.ovh/2025/12/05/C933Vx.jpeg" },
        { id: 51, src: "https://i.imgs.ovh/2025/12/05/C93wiL.jpeg" },
        { id: 52, src: "https://i.imgs.ovh/2025/12/05/C93X4n.jpeg" },
        { id: 53, src: "https://i.imgs.ovh/2025/12/05/C93Bk1.jpeg" },
        { id: 54, src: "https://i.imgs.ovh/2025/12/05/C93xZb.jpeg" },
        { id: 55, src: "https://i.imgs.ovh/2025/12/05/C93mpY.jpeg" },
        { id: 56, src: "https://i.imgs.ovh/2025/12/05/C93G90.jpeg" },
        { id: 57, src: "https://i.imgs.ovh/2025/12/05/C93hvg.jpeg" },
        { id: 58, src: "https://i.imgs.ovh/2025/12/05/C93pxd.jpeg" },
        { id: 59, src: "https://i.imgs.ovh/2025/12/05/C93KnO.jpeg" },
        { id: 60, src: "https://i.imgs.ovh/2025/12/05/C93tV6.jpeg" },
        { id: 61, src: "https://i.imgs.ovh/2025/12/05/C93dNp.jpeg" },
        { id: 62, src: "https://i.imgs.ovh/2025/12/05/C93E4c.jpeg" },
        { id: 63, src: "https://i.imgs.ovh/2025/12/05/C934k9.jpeg" },
        { id: 64, src: "https://i.imgs.ovh/2025/12/05/C93oOm.jpeg" },
        { id: 65, src: "https://i.imgs.ovh/2025/12/05/C93JpF.jpeg" },
        { id: 66, src: "https://i.imgs.ovh/2025/12/05/C93HsQ.jpeg" },
        { id: 67, src: "https://i.imgs.ovh/2025/12/05/C932rX.jpeg" },
        { id: 68, src: "https://i.imgs.ovh/2025/12/05/C93WxU.jpeg" },
        { id: 69, src: "https://i.imgs.ovh/2025/12/05/C93QWH.jpeg" },
        { id: 70, src: "https://i.imgs.ovh/2025/12/05/C93PUN.jpeg" },
        { id: 71, src: "https://i.imgs.ovh/2025/12/05/C939o4.jpeg" },
        { id: 72, src: "https://i.imgs.ovh/2025/12/05/C93skC.jpeg" },
        { id: 73, src: "https://i.imgs.ovh/2025/12/05/C93eOq.jpeg" },
        { id: 74, src: "https://i.imgs.ovh/2025/12/05/C936Kt.jpeg" },
        { id: 75, src: "https://i.imgs.ovh/2025/12/05/C935sa.jpeg" },
        { id: 76, src: "https://i.imgs.ovh/2025/12/05/C93qre.jpeg" },
        { id: 77, src: "https://i.imgs.ovh/2025/12/05/C93guh.jpeg" },
        { id: 78, src: "https://i.imgs.ovh/2025/12/05/C93RWr.jpeg" },
        { id: 79, src: "https://i.imgs.ovh/2025/12/05/C93AUM.jpeg" },
        { id: 80, src: "https://i.imgs.ovh/2025/12/05/C93b3x.jpeg" },
        { id: 81, src: "https://i.imgs.ovh/2025/12/05/C93VoL.jpeg" },
        { id: 82, src: "https://i.imgs.ovh/2025/12/05/C93Ty1.jpeg" },
        { id: 83, src: "https://i.imgs.ovh/2025/12/05/C93SKb.jpeg" },
        { id: 84, src: "https://i.imgs.ovh/2025/12/05/C93FeY.jpeg" },
        { id: 85, src: "https://i.imgs.ovh/2025/12/05/C93vr0.jpeg" },
        { id: 86, src: "https://i.imgs.ovh/2025/12/05/C93fug.jpeg" },
        { id: 87, src: "https://i.imgs.ovh/2025/12/05/C93cQd.jpeg" },
        { id: 88, src: "https://i.imgs.ovh/2025/12/05/C93jUO.jpeg" },
        { id: 89, src: "https://i.imgs.ovh/2025/12/05/C93Z36.jpeg" },
        { id: 90, src: "https://i.imgs.ovh/2025/12/05/C93OYp.jpeg" },
        { id: 91, src: "https://i.imgs.ovh/2025/12/05/C93ygc.jpeg" },
        { id: 92, src: "https://i.imgs.ovh/2025/12/05/C93Cy9.jpeg" },
        { id: 93, src: "https://i.imgs.ovh/2025/12/05/C930tm.jpeg" },
        { id: 94, src: "https://i.imgs.ovh/2025/12/05/C91ieF.jpeg" },
        { id: 95, src: "https://i.imgs.ovh/2025/12/05/C911mX.jpeg" },
        { id: 96, src: "https://i.imgs.ovh/2025/12/05/C91GyC.jpeg" },
        { id: 97, src: "https://i.imgs.ovh/2025/12/05/C91Itq.jpeg" },
        { id: 98, src: "https://i.imgs.ovh/2025/12/05/C91p8t.jpeg" },
        { id: 99, src: "https://i.imgs.ovh/2025/12/05/C91Kfa.jpeg" },
        { id: 100, src: "https://i.imgs.ovh/2025/12/05/C91o1M.jpeg" },
        { id: 101, src: "https://i.imgs.ovh/2025/12/05/C91JRL.jpeg" },
        { id: 102, src: "https://i.imgs.ovh/2025/12/05/C91nl1.jpeg" },
        { id: 103, src: "https://i.imgs.ovh/2025/12/05/C91QcY.jpeg" },
        { id: 104, src: "https://i.imgs.ovh/2025/12/05/C91Mm0.jpeg" },
        { id: 105, src: "https://i.imgs.ovh/2025/12/05/C918J6.jpeg" },
        { id: 106, src: "https://i.imgs.ovh/2025/12/05/C915Cc.jpeg" },
        { id: 107, src: "https://i.imgs.ovh/2025/12/05/C91bMX.jpeg" },
        { id: 108, src: "https://i.imgs.ovh/2025/12/05/C91TwH.jpeg" },
        { id: 109, src: "https://i.imgs.ovh/2025/12/05/C91LHN.jpeg" },
        { id: 110, src: "https://i.imgs.ovh/2025/12/05/C91F74.jpeg" },
        { id: 111, src: "https://i.imgs.ovh/2025/12/05/C91rlC.jpeg" },
        { id: 112, src: "https://i.imgs.ovh/2025/12/05/C91cjt.jpeg" },
      ],
    };
  },
  computed: {
    previewList() {
      return this.imgs.map((img) => img.src);
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
