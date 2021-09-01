var oDeatTop = document.querySelector("#main .deta .right .top")
var oSeiling = document.querySelector("#main .deta .right .seiling")
var oBody = document.documentElement || document.body;
var nums = oDeatTop.offsetTop;

window.onscroll = function(){
    if(oBody.scrollTop > nums){
        oDeatTop.setAttribute("class","top seilings")
        oSeiling.style.display = "block"
    }else{
        oDeatTop.setAttribute("class","top clearFix")
        oSeiling.style.display = "none";
    }
}

var oA = oDeatTop.firstElementChild.children;
var aDiv = document.querySelectorAll("#main .deta .content>div")

for(var i = 0;i < oA.length;i++){
    oA[i].index = i;
    oA[i].onclick = function(){
        oBody.scrollTop = aDiv[this.index].offsetTop - 10;
    }
}