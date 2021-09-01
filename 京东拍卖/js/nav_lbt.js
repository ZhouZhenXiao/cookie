var img = document.querySelector("#nav_lbt");
var aLi = document.querySelectorAll("#nav_lbt div.center ul li");
var bg = ["lbt_bg.png","lbt_bg1.png","lbt_bg2.png","lbt_bg3.png"]
var num = -1;
for(var j = 0;j < aLi.length;j++){
	aLi[j].index = j;
	aLi[j].onmouseover = function(){
		num = this.index;
		for(var k = 0;k < aLi.length;k++){
			aLi[k].style.backgroundColor = "white"
		}
		this.style.backgroundColor = "#2c2a2a";
		img.style.background = `url(img/${bg[this.index]}) no-repeat center center`;
	}
}
function fun(){
	num++;
	if(num == bg.length){
		num = 0
	}
	for(var i = 0;i < aLi.length;i++){
		aLi[i].style.backgroundColor = "white"
	}
	aLi[num].style.backgroundColor = "#2c2a2a";

	img.style.background = `url(img/${bg[num]}) no-repeat center center`;
}
fun()
var lbt = setInterval(fun,3000)
img.onmouseover = function(){
	clearInterval(lbt)
}
img.onmouseout = function(){
	lbt = setInterval(fun,3000)
}