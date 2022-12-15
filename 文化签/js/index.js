// 匿名函数初始化
(function () {
	let pgs = document.querySelectorAll('.page')
	for (let p of pgs) {
		p.style.display = 'none'
	}
	pgs[4].style.display = 'block'
})()

// 初始化
let loading_count = 0
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')
const p6 = document.querySelector('#p6')
const p7 = document.querySelector('#p7')
const p8 = document.querySelector('#p8')
const p9 = document.querySelector('#p9')
const player = document.querySelector('#player')

// p1
//func_p1()

function func_p1() {
	let loading = document.querySelector('#loading')
	let timer = setInterval(function () {
		loading.innerText = "loading " + loading_count + "%"
		if (loading_count >= 100) {
//			p1.style.display = 'none'
			p1.style.animation = 'enter 2s linear forwards'
			let timer1 = setTimeout(function () {
				p2.style.display = "block"
				player.style.display = 'block'
				clearTimeout(timer1)
			}, 1500)
			clearInterval(timer)
//			p2.style.display = 'block'
//			player.style.display = 'block'
		}
		loading_count++
	}, 20)
}

// player
let player_deg = 0
let player_auto = true
let timer
player.addEventListener('click', function () {
	let music = document.querySelector("#player .player")
	if (player_auto) {
		music.play()
		timer = setInterval(function () {
			player.style.rotate = `${player_deg}deg`
			player_deg += 5
			if (player_deg > 360) {
				player_deg = 0
			}
		}, 50)
	} else {
		music.pause()
		clearInterval(timer)
	}
	player_auto = !player_auto
})

// 进入抽一签
const p2_enter = document.querySelector('#p2 .p2-enter')
p2_enter.addEventListener('click', function () {
	p2.style.display = 'none'
	p3.style.display = 'block'
	let timer = setTimeout(function () {
	    p3.style.display = 'none'
		p4.style.display = 'block'
	}, 10*1000)
})

// 抽一签
const p4_enter = document.querySelector('#p4 .enter')
p4_enter.addEventListener('click', function () {
	p4.style.display = 'none'
	p5.style.display = 'block'
})

let x, x1, old = new Date();
p5.addEventListener('touchstart', function (e) {
	x = e.touches[0].pageX
})
p5.addEventListener('touchmove', function (e) {
	x1 = e.touches[0].pageX - x
})
p5.addEventListener('touchend', function (e) {
	if (new Date() - old > 1000) {
		func_p5()
		old = new Date()
	}
})

function func_p5() {
	let p5_circle = document.querySelector('#p5 .circle')
	if (Math.abs(x1) > 50) {
		if (x1 < 0) {
			// 向左
			change_dh()
			let timer = setTimeout(function () {
				change()
				clearTimeout(timer)
			}, 900)
			p5_circle.style.animation = 'player 1s linear reverse'
		} else {
			// 向右
			change_dh_res()
			change_res()
			p5_circle.style.animation = 'player 1s linear'
		}
		let circle_timer = setTimeout(function () {
			p5_circle.style.animation = 'none'
			
			let cards = document.querySelectorAll('#p5 .cards img')
			for (let card of cards) {
				card.style.animation = ''
			}
			
			func_p5_enter()
			
			clearTimeout(circle_timer)
		}, 1000)
	}
	x1 = 0
}

function change() {
	let cards = document.querySelectorAll('#p5 .cards img')
	for (let card of cards) {
		let c = ''
		switch(card.classList.value) {
			case "card1": c = "card4"; break;
			case "card2": c = "card1"; break;
			case "card3": c = "card2"; break;
			case "card4": c = "card3"; break;
		}
		card.classList = []
		card.classList.add(c)
	}
}
function change_res() {
	let cards = document.querySelectorAll('#p5 .cards img')
	for (let card of cards) {
		let c = ''
		switch(card.classList.value) {
			case "card1": c = "card2"; break;
			case "card2": c = "card3"; break;
			case "card3": c = "card4"; break;
			case "card4": c = "card1"; break;
		}
		card.classList = []
		card.classList.add(c)
	}
}
function change_dh() {
	let cards = document.querySelectorAll('#p5 .cards img')
	for (let card of cards) {
		let a = ''
		switch(card.classList.value) {
			case "card1": a = "c1_left"; break;
			case "card2": a = "c2_left"; break;
			case "card3": a = "c3_left"; break;
			case "card4": a = "c4_left"; break;
		}
		card.style.animation = a + " 1s"
	}
}
function change_dh_res() {
	let cards = document.querySelectorAll('#p5 .cards img')
	for (let card of cards) {
		let a = ''
		switch(card.classList.value) {
			case "card1": a = "c2_left"; break;
			case "card2": a = "c3_left"; break;
			case "card3": a = "c4_left"; break;
			case "card4": a = "c1_left"; break;
		}
		card.style.animation = a + " reverse 1s"
	}
}
func_p5_enter()
function func_p5_enter() {
	func_ps_reset()
	let card1 = document.querySelector('#p5 .cards .card1')
	card1.addEventListener('click', function () {
		this.style.animation = 'scale2 1s 2'
		let src = this.src
		setTimeout(function () {
			if (/healthy/.test(src)) {
				p6.style.display = 'block'
			} else if (/love/.test(src)) {
				p7.style.display = 'block'
			} else if (/wealth/.test(src)) {
				p8.style.display = 'block'
			} else if (/studies/.test(src)) {
				p9.style.display = 'block'
			}
//			p5.style.display = 'none'
		}, 2000)
	})
}

function func_ps_reset() {
	let ps = [p6, p7, p8, p7]
	for (let p of ps) {
		p.style.display = 'none'
	}
}
