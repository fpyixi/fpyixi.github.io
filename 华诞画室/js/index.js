(function () {
	const ps = document.querySelectorAll('.page')
	for (let p of ps) {
		p.style.display = 'none'
	}
	ps[0].style.display = 'block'
})()


const ps = document.querySelectorAll('.page')
const player = document.querySelector('#player')
const music = document.querySelector('#player .player')
const p1btn = document.querySelector('#p1 img:nth-child(2)')

p1btn.addEventListener('click', function () {
	ps[0].style.display = 'none'
	ps[1].style.display = 'block'
	player.style.display = 'block'
	player.style.animationPlayState = 'running'
	music.play()
})

let autoplay = false
player.addEventListener('click', function () {
	if (autoplay) {
		player.style.animationPlayState = 'running'
		music.play() 
	} else {
		player.style.animationPlayState = 'paused'
		music.pause()
	}
	autoplay = !autoplay
})

const p2btn = document.querySelector('#p2 img:nth-child(3)')
p2btn.addEventListener('click', function () {
	ps[1].style.display = 'none'
	ps[2].style.display = 'block'
})

const p3btn = document.querySelector('#p3 img ')
p3btn.addEventListener('click', function () {
	ps[2].style.display = 'none'
	ps[3].style.display = 'block'
})

const p4imgs = document.querySelectorAll('#p4 .imgs img')
funcp4imgs()
function funcp4imgs () {
	for (let g of p4imgs) {
		g.style.opacity = '0'
		g.addEventListener('click', function () {
			g.style.opacity = '1'
		})
	}
}

const p4btn2 = document.querySelector('#p4 .btns img:nth-last-child(2)')
p4btn2.addEventListener('click', function () {
	let ok = 0
	for (let g of p4imgs) {
		if (g.style.opacity === '0') {
			ok += 1
		}
		if (g.style.opacity === '1') {
			ok -= 1
		}
	}
	if (ok > 0) {
		for (let g of p4imgs) {
			g.style.opacity = '1'
		}
	} else {
		for (let g of p4imgs) {
			g.style.opacity = '0'
		}
	}
})

const p4btn1 = document.querySelector('#p4 .btns img:nth-last-child(1)')
p4btn1.addEventListener('click', function () {
	ps[3].style.display = 'none'
	ps[4].style.display = 'block'
})

ps[4].addEventListener('click', function () {
	ps[4].style.display = 'none'
	ps[3].style.display = 'block'
	funcp4imgs()
})
