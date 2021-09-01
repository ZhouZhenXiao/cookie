var oFloor = document.getElementById("floor")
var oMain = document.getElementById("main");
var aDd = oFloor.querySelectorAll("dl dd")
var oBody = document.documentElement || document.body;
var aFl = document.querySelectorAll(".floor")
var headLine = document.querySelector("#main ul.headline")
var oBody = document.documentElement || document.body;
var oDivHeadLine = document.querySelector("#main div.headline")
var _top = headLine.offsetTop;
var timers;


oFloor.style.left = oMain.offsetLeft + oMain.offsetWidth + 10 + "px";
window.onresize = function(){
    oFloor.style.left = oMain.offsetLeft + oMain.offsetWidth + 10 + "px";
}

window.onscroll = fun;
function fun(){
    clearInterval(timers)
    if(oBody.scrollTop > _top){
        headLine.setAttribute("class","headline seiling")
        oDivHeadLine.style.display = "block";
    }else{
        headLine.setAttribute("class","headline")
        oDivHeadLine.style.display = "none";
    }

    if(oBody.scrollTop >= document.getElementById("banner").offsetTop){
        oFloor.style.display = "block";
    }else{
        oFloor.style.display = "none";
    }
    for(var i = 0;i < aFl.length;i++){
        var oColor = document.querySelector(".color");
        if(oBody.scrollTop < aFl[0].offsetTop - 10){
            if(oColor){
                oColor.className = null;
            }
        }
        if(oBody.scrollTop >= aFl[i].offsetTop - 10){
            if(oColor){
                oColor.className = null;
            }
            aDd[i].className = "color";
        }
    }
}

for(let i = 0;i < aDd.length-1;i++){
    aDd[i].onclick = function(){
        clearInterval(timers)
        window.onscroll = null;
        timers = setInterval(function(){
            var num = parseInt((aFl[i].offsetTop - oBody.scrollTop) / 6);
            oBody.scrollTop += num;
            if(num == 0 || oBody.scrollTop >= 1632){
                clearInterval(timers);
                setTimeout(function(){
                    window.onscroll = fun;
                },100)
            }
        },10)
        for(var j = 0;j < aFl.length;j++){
            aDd[j].className = null;
        }
        this.className = "color";
    }
}