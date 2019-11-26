/**
 * 页面响应式
 * designWidth 为设计稿尺寸
 * remRatio 代表多少 rem 等于屏宽
 */
function flexable(remRatio = 75) {
  function setRem() {
    const winW = docEl.getBoundingClientRect().width;
    const fontSize = winW / remRatio;
    docEl.style.fontSize = fontSize;
    $style.innerText = `html{font-size:${fontSize}px !important;}`;
  }
  const win = window,
    doc = document,
    docEl = doc.documentElement,
    $style = doc.createElement("style");
  doc.head.appendChild($style);
  setRem();
  win.addEventListener("resize", setRem, !1);
}

export default flexable;
