const btns = document.querySelectorAll('.game-btn .btns img')
const ybs = document.querySelectorAll('.game-view .yuebings img')
const zhuashen = document.querySelector('.game-view .zhuazi .zhuashen')
const zhuazi = document.querySelector('.game-view .zhuazi')
const zhuatou = document.querySelector('.game-view .zhuazi .zhuatou')
let playover = undefined

function zwwReset () {
  zhuazi.style.left = '0vw'
  zhuashen.style.height = '3vw'
}
zwwReset()

btns[1].onclick = function () {
  zhuazi.style.left = parseInt(zhuazi.style.left) - 1 + 'vw'
  if (parseInt(zhuazi.style.left) < 0) {
    zhuazi.style.left = '0vw'
  }
}
btns[2].onclick = function () {
  zhuazi.style.left = parseInt(zhuazi.style.left) + 1 + 'vw'
  if (parseInt(zhuazi.style.left) > 62) {
    zhuazi.style.left = '62vw'
  }
}
let auto_go = true
let yb = undefined
btns[0].onclick = function () {
  // let n = parseInt(zhuashen.style.height)
  if (auto_go) {
    auto_go = false
    // zhuashen.style.animation = 'zhuashen 2s linear alternate 2'
    // ybs[0].style.animation = 'ybdown 2s 2s linear forwards'
    yb = isOK()
    if (yb instanceof HTMLElement) {
      playover = true
    } else {
      playover = false
    }
    ybgo(yb)
    // let timer = setTimeout(function () {
    //   auto_go = true
    //   clearTimeout(timer)
    // }, 4000)
  }
}

function ybgo (yb) {
  zhuashen.style.animation = 'zhuashen 2s linear alternate 2'
  yb.style.animation = 'ybdown 2s 2s linear forwards'
  let timer = setTimeout(function () {
    zhuashen.style.animation = 'none'
    // yb.style.animation = 'none'
    clearTimeout(timer)
  }, 4000)
}

function isOK () {
  for (let yb of ybs) {
    let zhuatou = document.querySelector('.game-view .zhuazi .zhuatou')
    if (yb.x < zhuatou.x && yb.x + yb.width > zhuatou.x + zhuatou.width) {
      return yb
    }
  }
}