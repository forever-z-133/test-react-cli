
/**
 * 页面响应式
 * designWidth 为设计稿尺寸
 * remRatio 代表多少 rem 等于屏宽
 */
function flexable(remRatio = 75) {
  function setRem() {
    var winW = docEl.getBoundingClientRect().width;
    $style.innerText = "html{font-size:" + (docEl.style.fontSize = winW / remRatio + "px") + " !important;}"
  }
  var win = window,
      doc = document,
      docEl = doc.documentElement,
      $style = doc.createElement("style");
  doc.head.appendChild($style);
  setRem();
  win.addEventListener("resize", setRem, !1);
}

export default flexable;