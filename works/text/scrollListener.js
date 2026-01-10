window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  window.parent.postMessage(
    {
      type: "scroll",
      scrollTop: scrollTop,
    },
    "*"
  ); // 注意：生产环境应该指定具体的 origin
});
