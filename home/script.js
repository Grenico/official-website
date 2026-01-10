const homeBtn = document.querySelector("#home");
const worksBtn = document.querySelector("#works");

homeBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});
worksBtn.addEventListener("click", () => {
  window.location.href = "../works/index.html";
});

//波纹插件
$(document).ready(function () {
  // 简单初始化
  $(".wave").ripples({ resolution: 200, perturbance: 0.02, interactive: true });

  // 如果是手机宽度，自动加水波
  function addMobileRipples() {
    if (window.innerWidth <= 768) {
      $(".wave").ripples("play");
      setTimeout(() => {
        $(".wave").ripples("drop", 50, 380, 25, 0.1);
      }, 1000);
    }
  }

  addMobileRipples();
  $(window).on("resize", addMobileRipples);
});
