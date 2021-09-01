var oTitle = document.querySelector("#main .right .like .title div")
var like_box = document.querySelector("#main .right .like .like_box")

var likeArr = [
    {
        img:"5af90670Ne92313f1.jpg",
        title:"夏黑无籽葡萄/提子1kg装新鲜水果",
        price:29.9,
        pj:0
    },
    {
        img:"8bbac21d369b42ed.jpg",
        title:"鞋子男夏季透气休闲运动鞋网面百搭椰子鞋韩版潮流夏天白",
        price:28.68,
        pj:0
    },
    {
        img:"690b2af863ead3ba.jpg",
        title:"【百亿补贴】壹农壹果哈密瓜西周蜜瓜水果新鲜甜瓜2-3斤",
        price:13.9,
        pj:0
    },
    {
        img:"e742524ccf521a1e.jpg",
        title:"风味坐标广西红心火龙果金都一号4个装中大果(单果300-",
        price:39.9,
        pj:0
    },
    {
        img:"e2bb8d34ad000b84.jpg",
        title:"【顺丰快递】甘肃红富士脆苹果水果顺丰快递新鲜静宁红苹",
        price:38.9,
        pj:0
    },
    {
        img:"478a31324a011007.jpg",
        title:"阿婆家的替片20包休闲膨化零食大礼包多口味食品组合",
        price:29.9,
        pj:0
    },
    {
        img:"04008c3ad04080c0.jpg",
        title:"垃圾袋家用加厚手提式自动收口抽绳厨房湿拉圾塑料袋颜色",
        price:22.9,
        pj:0
    },
    {
        img:"0a0afdf5ef165876.jpg",
        title:"来伊份苏打饼干奶盐味500g休闲网红零食美食传统糕点小包",
        price:13.8,
        pj:0
    },
    {
        img:"fa1fc37ba20175a6.jpg",
        title:"Apple iPhone 12 (A2404)128GB黑色支持移动联通电",
        price:8197,
        pj:0
    },
    {
        img:"4e008d20444522a9.jpg",
        title:"金米诺苹果数据线安卓充电线小米/华为type-c手机快充USB",
        price:21.8,
        pj:0
    },
    {
        img:"2683e5551215d7a7.jpg",
        title:"零趣瓜子仁整箱500g 蟹黄味原味牛肉味追剧吃的休闲食品",
        price:12.9,
        pj:0
    },
    {
        img:"b40434574361bad8.jpg",
        title:"飘柔洗发水兰花长效清爽家庭装1L(去屑控油男士女士通",
        price:29.9,
        pj:0
    }
]

for(var i = 0;i < Math.ceil(likeArr.length / 5);i++){
    var oUl = document.createElement("ul");
    oUl.setAttribute("class","clearFix")
    for(var j = i*5;j < likeArr.length;j++){
        var oLi = document.createElement("li")
        var oImg = document.createElement("img")
        oImg.setAttribute("src","img/order/"+likeArr[j].img)
        oLi.appendChild(oImg)
        var oP = document.createElement("p")
        oP.innerText = likeArr[j].title;
        oLi.appendChild(oP)
        var oP = document.createElement("p")
        oP.innerText = `￥${(likeArr[j].price).toFixed(2)}`;
        oLi.appendChild(oP)
        var oP = document.createElement("p")
        oP.innerText = `(已有${likeArr[j].pj}人评价)`;
        oLi.appendChild(oP);
        oUl.appendChild(oLi);
        if(oUl.children.length == 5){
            break;
        }
    }
    var oSpan = document.createElement("span")
    oSpan.innerText = i+1;
    oTitle.appendChild(oSpan)
    like_box.appendChild(oUl);
}
var aSpan = oTitle.children;
var aUl = like_box.children;
aSpan[0].setAttribute("class","color")
for(let i = 0;i < aSpan.length;i++){
    aSpan[i].onmouseover = function(){
        for(var j = 0;j < aUl.length;j++){
            aUl[j].style.display = "none";
            aSpan[j].removeAttribute("class")
        }
        aUl[i].style.display = "block";
        this.setAttribute("class","color")
    }
}