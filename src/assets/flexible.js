// 移动端750设计稿自适应，字体根据dpr设置
!(function () {
  let dpr, rem
  let docEl = document.documentElement
  let fontEl = document.createElement('style')
  dpr = window.devicePixelRatio || 1
  if (dpr >= 3) {
    dpr = 3
    // rem = 54
  } else if (dpr >= 2 && dpr < 3) {
    dpr = 2
    // rem = 36
  } else {
    dpr = 1
    // rem = 18
  }
  console.log(rem, 'test====')
  rem = docEl.clientWidth / 10
  docEl.setAttribute('data-dpr', dpr)
  fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}'
  docEl.firstElementChild.appendChild(fontEl)
}())
