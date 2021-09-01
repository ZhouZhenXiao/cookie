var oHello = document.getElementById("hello")
var oSign = document.getElementById("sign")
if(window.location.search != ""){
	oSign.style.display = "none";
	oHello.innerHTML = "你好，" + window.location.search.slice(1).split("=")[1];
	oHello.href = "#";
}