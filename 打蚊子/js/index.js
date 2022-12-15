const box = document.querySelector('.box')
const start = document.querySelector('.start')
const view = document.querySelector('.view')
const kill = document.querySelector('#kill')

start.onclick = function () {
	gameStart()
	this.style.display = 'none'
}

let gameTimer

function gameStart() {
	gameGo()
	gameTimer = setInterval(function () {
		let dom = document.createElement('div')
		dom.style.top = `${parseInt(Math.random() * 70) + 15}vh`
		let img = document.createElement('img')
		let imgName = parseInt(Math.random() * 10) % 2 === 0 ? 'wenzi' : 'bee'
		img.className = imgName
		if (imgName === 'wenzi') {
			dom.className = 'the w'
			img.src = `img/蚊子${parseInt(Math.random() * 11) % 3 + 1}.png`
		} else {
			dom.className = 'the b'
			img.src = `img/蜜蜂${parseInt(Math.random() * 10) % 2 + 1}.png`
		}
		dom.appendChild(img)
		view.appendChild(dom)
		let the = setInterval(function () {
			dom.style.left = dom.offsetLeft + 1 + 'px'
			if (dom.offsetLeft > window.innerWidth) {
				view.removeChild(dom)
				clearInterval(the)
			}
		}, 100)
	}, 2000)
}

function gameGo() {
	let dom = document.createElement('div')
	dom.style.top = `${parseInt(Math.random() * 70) + 15}vh`
	let img = document.createElement('img')
	let imgName = parseInt(Math.random() * 10) % 2 === 0 ? 'wenzi' : 'bee'
	img.className = imgName
	if (imgName === 'wenzi') {
		dom.className = 'the w'
		img.src = `img/蚊子${parseInt(Math.random() * 11) % 3 + 1}.png`
	} else {
		dom.className = 'the b'
		img.src = `img/蜜蜂${parseInt(Math.random() * 10) % 2 + 1}.png`
	}
	dom.appendChild(img)
	view.appendChild(dom)
	let the = setInterval(function () {
		dom.style.left = dom.offsetLeft + 1 + 'px'
		if (dom.offsetLeft > window.innerWidth) {
			view.removeChild(dom)
			clearInterval(the)
		}
	}, 100)
}

let x, y;

window.ontouchstart = function (e) {
	box.style.display = 'block'
	window.ontouchmove = function (e) {
		boxMove(e)
		isKill(e)
		isOver(e)
	}
}

function isKill(e) {
	const wenzi = document.querySelectorAll('.view .w')
	wenzi.forEach(d => {
		isSelect(d)
		if (isSelect(d)) {
			d.style.display = 'none'
			kill.innerText = parseInt(kill.innerText) - 1
		} else {
			// console.log(false);
		}
	})
}

function isOver(e) {
	const bee = document.querySelectorAll('.view .b')
	bee.forEach(d => {
		isSelect(d)
		if (isSelect(d)) {
			d.style.display = 'none'
			clearInterval(gameTimer)
			view.innerHTML = ''
			alert('over')
		} else {
			// console.log(false);
		}
	})
}

function isSelect(d) { 
	let top = d.offsetTop
	let left = d.offsetLeft
	// let w = d.clientWidth
	// let h = d.clientHeight
	if ( y > top && y < top + 20 && x > left && x < left + 20) {
		return true
	} else {
		return false
	}
}

function boxMove(e) {
	x = e.touches[0].clientX
	y = e.touches[0].clientY
	box.style.left = x + 'px'
	box.style.top = y + 'px'
}

window.ontouchend = function (e) {
	box.style.display = 'none'
	window.ontouchmove = () => {}
}

//thes.forEach(the => {
//	let add = parseInt(Math.random() * 30 + .5) / 10
//	the.style.left = '0px'
//	resetThe(the)
//	setInterval(function () {
//		console.log(the.offsetLeft + add)
//		the.style.left = the.offsetLeft + add + 'px'
//		if (the.offsetLeft > window.innerWidth) { add = -Math.abs(add); the.style.transform = 'rotateY(180deg)' }
//		if (the.offsetLeft + the.clientWidth < 0) { add = Math.abs(add); the.style.transform = '' }
//	}, 100)
//})
//
//function resetThe (d) {
//	d.style.top = Math.floor(65 * Math.random() + 15) + 'vh'
//}
