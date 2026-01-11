export default {
  template: /*html*/ `
  <div class="headbar">
  <h1>摄影</h1>
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
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOusuL.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOusuL.jpeg",
        },
        {
          id: 2,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOueQn.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOueQn.jpeg",
        },
        {
          id: 3,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOu53b.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOu53b.jpeg",
        },
        {
          id: 4,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOuvYF.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOuvYF.jpeg",
        },
        {
          id: 5,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOurRQ.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOurRQ.jpeg",
        },
        {
          id: 6,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOufCX.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOufCX.jpeg",
        },
        {
          id: 7,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOujtU.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOujtU.jpeg",
        },
        {
          id: 8,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOuZcN.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOuZcN.jpeg",
        },
        {
          id: 9,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOuymA.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOuymA.jpeg",
        },
        {
          id: 10,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmhLn.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmhLn.jpeg",
        },
        {
          id: 11,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmlC0.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmlC0.jpeg",
        },
        {
          id: 12,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmElg.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmElg.jpeg",
        },
        {
          id: 13,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmJG6.md.png",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmJG6.png",
        },
        {
          id: 14,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmHMp.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmHMp.jpeg",
        },
        {
          id: 15,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOm2Lc.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOm2Lc.jpeg",
        },
        {
          id: 16,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmWw9.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmWw9.jpeg",
        },
        {
          id: 17,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmQHm.md.jpeg",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmQHm.jpeg",
        },
        {
          id: 18,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmPAF.md.png",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmPAF.png",
        },
        {
          id: 19,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmM7Q.md.png",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmM7Q.png",
        },
        {
          id: 20,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOm9dX.md.png",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOm9dX.png",
        },
        {
          id: 21,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOms6U.md.png",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOms6U.png",
        },
        {
          id: 22,
          thumbnail: "https://i.imgs.ovh/2026/01/07/yOmqS4.md.png",
          fullSize: "https://i.imgs.ovh/2026/01/07/yOmqS4.png",
        },
        {
          id: 23,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9iVLM.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9iVLM.jpeg",
        },
        {
          id: 24,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9iTwx.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9iTwx.jpeg",
        },
        {
          id: 25,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NhHA.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NhHA.jpeg",
        },
        {
          id: 26,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9Ntdq.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9Ntdq.jpeg",
        },
        {
          id: 27,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9Nl5t.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9Nl5t.jpeg",
        },
        {
          id: 28,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NoDh.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NoDh.jpeg",
        },
        {
          id: 29,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NnzL.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NnzL.jpeg",
        },
        {
          id: 30,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NeDg.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NeDg.jpeg",
        },
        {
          id: 31,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9N8Fd.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9N8Fd.jpeg",
        },
        {
          id: 32,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9N5XO.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9N5XO.jpeg",
        },
        {
          id: 33,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9Nq26.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9Nq26.jpeg",
        },
        {
          id: 34,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9Ng0c.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9Ng0c.jpeg",
        },
        {
          id: 35,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NAE9.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NAE9.jpeg",
        },
        {
          id: 36,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NbaF.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NbaF.jpeg",
        },
        {
          id: 37,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NUIQ.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NUIQ.jpeg",
        },
        {
          id: 38,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NT9X.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NT9X.jpeg",
        },
        {
          id: 39,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NLFU.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NLFU.jpeg",
        },
        {
          id: 40,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NFBH.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NFBH.jpeg",
        },
        {
          id: 41,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NvnN.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NvnN.jpeg",
        },
        {
          id: 42,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NrbA.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NrbA.jpeg",
        },
        {
          id: 43,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9Nci4.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9Nci4.jpeg",
        },
        {
          id: 44,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NjEC.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NjEC.jpeg",
        },
        {
          id: 45,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9Naqq.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9Naqq.jpeg",
        },
        {
          id: 46,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NZZt.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NZZt.jpeg",
        },
        {
          id: 47,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9NyIa.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9NyIa.jpeg",
        },
        {
          id: 48,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C9N7vh.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C9N7vh.jpeg",
        },
        {
          id: 49,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93iBr.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93iBr.jpeg",
        },
        {
          id: 50,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C933Vx.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C933Vx.jpeg",
        },
        {
          id: 51,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93wiL.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93wiL.jpeg",
        },
        {
          id: 52,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93X4n.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93X4n.jpeg",
        },
        {
          id: 53,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93Bk1.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93Bk1.jpeg",
        },
        {
          id: 54,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93xZb.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93xZb.jpeg",
        },
        {
          id: 55,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93mpY.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93mpY.jpeg",
        },
        {
          id: 56,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93G90.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93G90.jpeg",
        },
        {
          id: 57,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93hvg.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93hvg.jpeg",
        },
        {
          id: 58,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93pxd.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93pxd.jpeg",
        },
        {
          id: 59,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93KnO.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93KnO.jpeg",
        },
        {
          id: 60,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93tV6.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93tV6.jpeg",
        },
        {
          id: 61,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93dNp.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93dNp.jpeg",
        },
        {
          id: 62,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93E4c.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93E4c.jpeg",
        },
        {
          id: 63,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C934k9.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C934k9.jpeg",
        },
        {
          id: 64,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93oOm.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93oOm.jpeg",
        },
        {
          id: 65,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93JpF.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93JpF.jpeg",
        },
        {
          id: 66,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93HsQ.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93HsQ.jpeg",
        },
        {
          id: 67,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C932rX.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C932rX.jpeg",
        },
        {
          id: 68,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93WxU.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93WxU.jpeg",
        },
        {
          id: 69,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93QWH.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93QWH.jpeg",
        },
        {
          id: 70,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93PUN.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93PUN.jpeg",
        },
        {
          id: 71,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C939o4.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C939o4.jpeg",
        },
        {
          id: 72,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93skC.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93skC.jpeg",
        },
        {
          id: 73,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93eOq.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93eOq.jpeg",
        },
        {
          id: 74,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C936Kt.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C936Kt.jpeg",
        },
        {
          id: 75,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C935sa.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C935sa.jpeg",
        },
        {
          id: 76,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93qre.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93qre.jpeg",
        },
        {
          id: 77,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93guh.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93guh.jpeg",
        },
        {
          id: 78,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93RWr.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93RWr.jpeg",
        },
        {
          id: 79,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93AUM.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93AUM.jpeg",
        },
        {
          id: 80,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93b3x.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93b3x.jpeg",
        },
        {
          id: 81,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93VoL.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93VoL.jpeg",
        },
        {
          id: 82,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93Ty1.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93Ty1.jpeg",
        },
        {
          id: 83,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93SKb.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93SKb.jpeg",
        },
        {
          id: 84,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93FeY.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93FeY.jpeg",
        },
        {
          id: 85,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93vr0.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93vr0.jpeg",
        },
        {
          id: 86,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93fug.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93fug.jpeg",
        },
        {
          id: 87,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93cQd.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93cQd.jpeg",
        },
        {
          id: 88,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93jUO.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93jUO.jpeg",
        },
        {
          id: 89,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93Z36.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93Z36.jpeg",
        },
        {
          id: 90,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93OYp.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93OYp.jpeg",
        },
        {
          id: 91,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93ygc.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93ygc.jpeg",
        },
        {
          id: 92,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C93Cy9.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C93Cy9.jpeg",
        },
        {
          id: 93,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C930tm.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C930tm.jpeg",
        },
        {
          id: 94,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91ieF.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91ieF.jpeg",
        },
        {
          id: 95,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C911mX.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C911mX.jpeg",
        },
        {
          id: 96,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91GyC.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91GyC.jpeg",
        },
        {
          id: 97,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91Itq.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91Itq.jpeg",
        },
        {
          id: 98,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91p8t.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91p8t.jpeg",
        },
        {
          id: 99,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91Kfa.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91Kfa.jpeg",
        },
        {
          id: 100,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91o1M.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91o1M.jpeg",
        },
        {
          id: 101,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91JRL.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91JRL.jpeg",
        },
        {
          id: 102,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91nl1.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91nl1.jpeg",
        },
        {
          id: 103,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91QcY.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91QcY.jpeg",
        },
        {
          id: 104,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91Mm0.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91Mm0.jpeg",
        },
        {
          id: 105,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C918J6.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C918J6.jpeg",
        },
        {
          id: 106,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C915Cc.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C915Cc.jpeg",
        },
        {
          id: 107,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91bMX.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91bMX.jpeg",
        },
        {
          id: 108,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91TwH.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91TwH.jpeg",
        },
        {
          id: 109,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91LHN.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91LHN.jpeg",
        },
        {
          id: 110,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91F74.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91F74.jpeg",
        },
        {
          id: 111,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91rlC.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91rlC.jpeg",
        },
        {
          id: 112,
          thumbnail: "https://i.imgs.ovh/2025/12/05/C91cjt.md.jpeg",
          fullSize: "https://i.imgs.ovh/2025/12/05/C91cjt.jpeg",
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
