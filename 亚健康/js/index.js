let bg1=document.querySelector("#bg1")
let bg5=document.querySelector("#bg5")
let bg6=document.querySelector("#bg6")
let bg3=document.querySelector(".bg3")
let bg4=document.querySelector(".bg4")
let bg1and2=document.querySelector("#bg1and2")
let bg3and4=document.querySelector("#bg3and4")
let loadingText=document.querySelector(".loadingText")
let sun=document.querySelector(".sun")
let football=document.querySelector(".football")
let about_health=document.querySelector(".abuot_health")
//-------------------------------------------------------
let mcIco=document.querySelector(".mcIco")
let au =document.querySelector(".au")


mcIco.onclick=function(){
	
	if(au.paused){
		mcIco.style.animation="mcIco 2s infinite linear running"
		au.play()
	}else{
		mcIco.style.animation="mcIco 2s infinite linear paused"
		au.pause()
	}
	
}


//-------------------------------------------------------
let= bg1_loadingA=0;
let bg1_loading=setInterval(function(){
	mcIco.style.display="none"
	 bg1_loadingA++;
	 loadingText.innerHTML=bg1_loadingA+'%'
	 if(bg1_loadingA==100){
		mcIco.style.display="block"
	 	
	 	clearInterval(bg1_loading)
		bg1.style.display="none"
	 	sun.style.animation="sun 2s infinite linear alternate"
	 	football.style.animation="football1 2s infinite linear alternate,football2 1s infinite linear"
	 	about_health.style.animation="sun 1s infinite linear alternate"	
	 }
},20)

about_health.onclick=function(){
	mcIco.style.display="none"
	
	bg1and2.style.display="none"
	bg3and4.style.display="block"
	bg3.style.display="block"
	
}

let xuanxiang=document.querySelectorAll(".xuanxiang div")
let allStar = 0
let allLine = []

xuanxiang.forEach(x => {
	x.onclick = function () {
//		if (x.style.backgroundColor === 'orange') {
//			x.style.backgroundColor = 'rgb(43,122,80)'
//			x.children[0].style.color = 'rgb(43,122,80)'
//			x.children[1].style.display = 'none'
//			allStar -= .5
//		} else {
//			x.style.backgroundColor = 'orange'
//			x.children[0].style.color = 'red'
//			x.children[1].style.display = 'inline-block'
//			allStar += .5
//		}
		allLine.push(x.innerText.substr(1))
		x.style.backgroundColor = 'orange'
		x.children[0].style.color = 'red'
		x.children[1].style.display = 'inline-block'
		x.onclick = () => {}
		allStar += .5
		
	}
})


let bg3btn=document.querySelector(".bg3btn");
let bg4btn=document.querySelector(".bg4btn");
let bg5btn=document.querySelector(".bg5btn");
let bg6btn=document.querySelector(".bg6btn");
bg3btn.onclick=function(){
	bg3.style.display='none'
	bg4.style.display='block'
}

bg4btn.onclick=function(){
	bg4.style.display='none'
	bg5.style.display='block'
	// 结算页面
	getStars(allStar)
	document.querySelector('#all-star').innerText = allStar
	const lines = document.querySelector('#all-line')
	lines.innerHTML = ''
	allLine.forEach(a => {
		let line = document.createElement('div')
		line.className = 'line'
		line.innerText = a
		lines.appendChild(line)
	})
	if (allLine.length % 2 === 1) {
		let end = document.createElement('div')
		end.className = 'end'
		lines.appendChild(end)
	}
}

bg5btn.onclick=function(){
	bg5.style.display='none'
	bg6.style.display='block'
}

bg6btn.onclick=function(){
	bg6.style.display='none'
	bg3and4.style.display='none'
	bg1and2.style.display='block'
	mcIco.style.display="block"
	
}
bg1and2
let bg3topBack=document.querySelector(".bg3topBack")
let bg4topBack=document.querySelector(".bg4topBack")
let bg5topBack=document.querySelector(".bg5topBack")
let bg6topBack=document.querySelector(".bg6topBack")


bg6topBack.onclick=function(){
	bg6.style.display="none"
	bg5.style.display="block"
}

bg5topBack.onclick=function(){
	bg5.style.display="none"
	bg4.style.display="block"
}

bg4topBack.onclick=function(){
	bg3.style.display="block"
	bg4.style.display="none"
}

bg3topBack.onclick=function(){
	bg3.style.display="none"
	bg3and4.style.display="none"
	bg1and2.style.display='block'
}

function getStars(n) {
	const box = document.querySelector('#box')
	box.innerHTML = ''
	for (let i = 0; i < parseInt(n); i++) {
		let img = document.createElement('img')
		img.src = 'img/实心星星.png'
		box.appendChild(img)
	}
	if (n - parseInt(n) === 0.5) {
		let img = document.createElement('img')
		img.src = 'img/半颗星星.png'
		box.appendChild(img)
	}
	for (let i = 0; i < parseInt(5 - n); i++) {
		let img = document.createElement('img')
		img.src = 'img/空心星星.png'
		box.appendChild(img)
	}
}