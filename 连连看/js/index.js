(function () {
//	document.querySelector('#bg2').style.display = 'block'
	document.querySelector('#bg2').style.display = 'none'
	document.querySelector('#bg2 .llk').style.display = 'none'
	document.querySelector('#player img').style.display = 'none'
	document.querySelector('#bg2 .llk-cg').style.display = 'none'
	document.querySelector('#bg2 .zww').style.display = 'none'
	
})()


const loading = document.querySelector('.loading .line2 span')
const progress_bg = document.querySelector('.loading .line3 .progress-bg')
const progress_w = document.querySelector('.loading .line3 .progress')
const loading_div = document.querySelector('.loading')
const bg2 = document.querySelector('#bg2')
const llk = document.querySelector('#bg2 .llk')
const llk_cg = document.querySelector('#bg2 .llk-cg')
const zww = document.querySelector('#bg2 .zww')


// 进度条
progress()
function progress() {
	let count = 0
	let timer1 = setInterval(function () {
		if (loading.innerText === '...') {
			loading.innerText = ''
		} else {
			loading.innerText += '.'
		}
	}, 300)
	let timer2 = setInterval(function () {
		if (++count >= 100) {
			clearInterval(timer1)
			clearInterval(timer2)
			loading_div.style.display = 'none'
			bg2.style.display = 'block'
			playerIcon.style.display = 'block'
		}
		progress_bg.style.width = count+'%'
		progress_w.innerText = count+'%'
	}, 20)
}

const playerIcon = document.querySelector('#player img')
const music = document.querySelector('#player .player')
let autoplay = true
// 音乐播放器
playerIcon.addEventListener('click', function () {
	if (autoplay) {
		playerIcon.style.animationPlayState = 'running'
		music.play()
	} else {
		playerIcon.style.animationPlayState = 'paused'
		music.pause()
	}
	autoplay = !autoplay
})

let timer = null
let timerCount = 0
const bg2Content = document.querySelector('#bg2 .content.main')
const homebtn1 = document.querySelector('#bg2 .content .head-foot .btn1')
const clock = document.querySelector('.llk .line1 .left .clock')
const topIcon = document.querySelector('#bg2 .top-icon')
const daizi1 = document.querySelector('#bg2 .content .head-foot img:nth-child(1)')
const daizi2 = document.querySelector('#bg2 .content .head-foot img:nth-child(2)')

// 点击 连连看
homebtn1.addEventListener('click', function () {
	homebtn1.style.animation = 'scales-btn 1s ease-in-out'
	setTimeout(function () {
		homebtn1.style.animation = 'none'
		topIcon.style.display = 'none'
		llk.style.display = 'block'
		resetCard()
		bg2Content.style.animation = 'none'
		daizi1.style.animation = 'none'
		daizi2.style.animation = 'none'
		
		// 是否成功
		timer = setInterval(function () {
			clock.innerText = timerCount++ + ''
			if (count === 12) {
				clearInterval(timer)
				// cg
				llk_cg.style.display = 'block'
			}
		}, 1000)
	}, 1000)
})

let cardsArr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
const cards = document.querySelectorAll('.llk .line2 .card')
const imgs = document.querySelectorAll('.llk .line2 .card img')

// 卡片重置函数
function resetCard() {
	for (let i = 0; i< cardsArr.length; i++) {
		let j = parseInt(Math.random()*100)%cardsArr.length
		let z = cardsArr[i]
		cardsArr[i] = cardsArr[j]
		cardsArr[j] = z
	}
	for (let c of cards) {
		c.style.animation = 'none'
	}
	for (let i = 0; i< cardsArr.length; i++) {
		let img = imgs[i]
		img.src = `img/3-月饼${cardsArr[i]}.png`
	}
	timerCount = 0
}

// 重置按钮
const reset_cards = document.querySelector('.llk .line1 .right img')
reset_cards.addEventListener('click', function () {
	resetCard()
})

let card1 = null
let card2 = null
let count = 0
let isok = true
// 卡片 点击事件
for (let i = 0; i< cardsArr.length; i++) {
	cards[i].onclick = function () {
		if (isok) {
		this.style.animation = 'card .5s linear forwards'
		if (card1 == null || this == cards[card1]) {
			card1 = i
		} else {
			card2 = i
			if (imgs[card1].src === imgs[card2].src) {
				cards[card1].onclick = function () {}
				cards[card2].onclick = function () {}
				card1 = null
				card2 = null
				count += 2
			} else {
				setTimeout(function () {
					cards[card1].style.animation = 'none'
					cards[card2].style.animation = 'none'
					card1 = null
					card2 = null
				}, 500)
			}
		}
		isok = false
		}
		setTimeout(function () {
			isok = true
		}, 500)
	}
}

// 连连看 退出
const llkExit = document.querySelector('#bg2 .llk .line3 img')
llkExit.addEventListener('click', function () {
	clearInterval(timer)
	timerCount = 0
	clock.innerText = '0'
	resetCard()
	card1 = null
	card2 = null
	llk.style.display = 'none'
	topIcon.style.display = 'block'
	// to 抓娃娃
	alert('zww')
})

// 连连看 成功 返回首页
const llkToHome = document.querySelector('#bg2 .llk-cg .tohome')
llkToHome.addEventListener('click', function () {
	clearInterval(timer)
	timerCount = 0
	clock.innerText = '0'
	resetCard()
	card1 = null
	card2 = null
	bg2Content.style.display = 'block'
	topIcon.style.display = 'block'
	llk.style.display = 'none'
	bg2Content.style.animation = 'content-top 3s 0s linear forwards'
	daizi1.style.animation = 'toLeft0 5s 0s ease-in-out forwards'
	daizi2.style.animation = 'toLeft0 5s 0s ease-in-out forwards'
	llk_cg.style.display = 'none'
})

// 连连看 下一个
const llkToNext = document.querySelector('#bg2 .llk-cg .tonext')
llkToNext.addEventListener('click', function () {
	clearInterval(timer)
	timerCount = 0
	clock.innerText = '0'
	resetCard()
	card1 = null
	card2 = null
	llk.style.display = 'none'
	llk_cg.style.display = 'none'
	topIcon.style.display = 'block'
	// to 抓娃娃
	alert('zww')
})

// 点击 抓娃娃
const homebtn2 = document.querySelector('#bg2 .content .head-foot .btn2')
homebtn2.addEventListener('click', function () {
	homebtn2.style.animation = 'scales-btn 1s ease-in-out'
	setTimeout(function () {
		homebtn2.style.animation = 'none'
		resetCard()
		bg2Content.style.animation = 'none'
		daizi1.style.animation = 'none'
		
		zww.style.display = 'block'
		zww.style.animation = 'content-top 3s 0s linear forwards'
		alert('吐了')
	}, 1000)
})



