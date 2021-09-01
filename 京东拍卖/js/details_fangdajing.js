var bigBg = document.querySelectorAll("#main div:first-child .top ul li")

for(var i = 0;i < bigBg.length;i++){
    var oSpan = document.createElement("span")
    oSpan.style.display = "none";
    bigBg[i].appendChild(oSpan)
    var oDiv = document.createElement("div")
    var cloneBigBg = bigBg[i].querySelector("img").cloneNode(true);
    oDiv.style.top = "0";
    oDiv.style.left = bigBg[i].parentNode.offsetWidth + 10 + "px";
    oDiv.style.width = bigBg[i].parentNode.offsetWidth + "px";
    oDiv.style.height = bigBg[i].parentNode.offsetHeight + "px";
    oDiv.appendChild(cloneBigBg)
    bigBg[i].appendChild(oDiv)
    
    bigBg[i].onmouseover = function(){
        this.querySelector("span").style.display = "block";
        this.querySelector("div").style.display = "block";
    }
    bigBg[i].onmouseout = function(){
        this.querySelector("span").style.display = "none";
        this.querySelector("div").style.display = "none"
    }
    bigBg[i].onmousemove = function(ev){
        var even = ev || window.event;
        var oSpan = this.querySelector("span");
        var oImg = this.querySelector("div>img");
        
        var x = even.offsetX - oSpan.offsetWidth / 2;
        var y = even.offsetY - oSpan.offsetHeight / 2;
        
        x = x <= 0 ? 0 : x;
        y = y <= 0 ? 0 : y;

        x = x >= this.parentNode.clientWidth - oSpan.offsetWidth ? this.parentNode.offsetWidth - oSpan.offsetWidth : x ;
        y = y >= this.parentNode.clientHeight - oSpan.offsetHeight ? this.parentNode.offsetHeight - oSpan.offsetHeight : y ;

        oSpan.style.left = x + "px";
        oSpan.style.top = y + "px";
        oImg.style.left = -x * this.parentNode.offsetWidth / oSpan.offsetWidth + "px";
        oImg.style.top = -y * this.parentNode.offsetHeight / oSpan.offsetHeight + "px";
    }
}