var li = document.querySelectorAll("#main ul.headline li")
var aDiv = document.querySelectorAll("#main .matter div")
for(var i = 0;i < li.length;i++){
	li[i].index = i;
	li[i].onclick = function(){
		for(var j = 0;j < aDiv.length;j++){
			aDiv[j].style.display = "none";
			li[j].style.borderBottom = "4px solid transparent";
			li[j].children[0].style.color = "#433e33";
		}
		this.style.borderBottomColor = "#c71622";
		aDiv[this.index].style.display = "block";
		this.children[0].style.color = "#c71622";
	}
}