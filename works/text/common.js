//返回按钮
const backButton = document.createElement("button");
backButton.innerText = "<<返回";
backButton.style.cssText =
  "position: relative; top: 30px; left: 30px; font-size: 15px;background: none;border: none; cursor: pointer;width:fit-content";
document.body.insertBefore(backButton, document.body.firstChild);

//设置按钮悬浮效果
backButton.addEventListener("mouseover", () => {
  backButton.style.color = "blue";
});

backButton.addEventListener("mouseout", () => {
  backButton.style.color = "black";
});

backButton.addEventListener("click", () => {
  history.back();
});

//回到顶部按钮
const toTopBtn = document.createElement("button");
toTopBtn.className = "fas fa-angle-up";
if (window.innerWidth <= 768) {
  toTopBtn.style.cssText =
    "opacity:1;font-size:x-large;position: fixed; bottom: 40%;right: 7%;width:35px;height:35px;background-color:transparent;border:none;z-index: 99;";
} else {
  toTopBtn.style.cssText =
    "display: block;opacity:0.3;position: fixed; bottom: 8%;right: 5%;width:35px;height:35px;background-color:#efeff3;border-radius:10%;border:none;cursor:pointer;z-index: 99;";
}
document.body.appendChild(toTopBtn);

//设置按钮悬浮效果
toTopBtn.addEventListener("mouseover", () => {
  toTopBtn.style.opacity = 1;
});

toTopBtn.addEventListener("mouseout", () => {
  toTopBtn.style.opacity = 0.3;
});

// 当用户向下滚动20px时，显示按钮
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};
//点击按钮时，回到顶部，并设置平滑滚动
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
