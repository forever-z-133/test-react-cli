/**
 * 滚动容器与数据绑定触底交互
 */
export function divideDataForScroll($scroller, data, callback, options) {
  options = options || {};
  const size = options.size || 20;
  const winH = $scroller.offsetHeight;
  const threshold = options.threshold || 50;

  $scroller.removeEventListener("scroll", myScroll);
  $scroller.addEventListener("scroll", myScroll);

  let page = 1;
  myScroll();

  function myScroll() {
    const elemH = $scroller.scrollHeight;
    const sTop = $scroller.scrollTop;
    if (sTop + winH + threshold > elemH) touchBottom();
  }

  function touchBottom() {
    const nowSize = page * size;
    const nowData = data.slice(0, nowSize);

    // 数据全部加载完毕
    if (data.slice(nowSize - size, nowSize).length < 1) {
      options.finish && options.finish(data, page, size); // 全部完成
      return $scroller.removeEventListener("scroll", myScroll);
    }

    // 每页的回调
    callback && callback(nowData, page, size);
  }
}

export default {
  divideDataForScroll
};
