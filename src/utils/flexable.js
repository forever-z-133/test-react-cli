
/**
 * 页面响应式
 * designWidth 为设计稿尺寸
 * remRatio 代表多少 rem 等于屏宽
 */
function flexable(designWidth = 750, remRatio = 10) {
  function e() {
    const winW = a.getBoundingClientRect().width;
    r.innerText = "html{font-size:" + (a.style.fontSize = winW / o * d + "px") + " !important;}"
  }
  var t = navigator.userAgent,
      n = (t.match(/(iPhone|iPad|iPod)/), t.match(/Android/i), window),
      i = document,
      a = i.documentElement,
      o = (n.devicePixelRatio, designWidth),
      d = designWidth / remRatio,
      r = (i.head.querySelector('[name="viewport"]'), i.createElement("style"));
  r.innerText = "html{font-size:100px !important}";
  i.head.appendChild(r);
  e();
  n.addEventListener("resize", e, !1);
  a.className += t.match(/ucbrowser/i) ? " app-uc " : "";
}

export default flexable;