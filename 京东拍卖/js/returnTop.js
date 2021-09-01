var returnTop = document.querySelector("#fixed .head")
var bodyScr = document.documentElement || document.body;
var _top = document.querySelector("#fixed .head")

_top.onclick = returnTop.onclick = function(){
    var timer = setInterval(function(){
        if(bodyScr.scrollTop <= 0){
            clearInterval(timer)
            return;
        }
        bodyScr.scrollTop -= 100;
    },10)
}