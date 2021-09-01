var qr = document.getElementsByClassName("left")
var acc = document.getElementsByClassName("right")
acc1 = acc[1];
qr1 = qr[1]
qr = qr[1].getElementsByTagName("a")
acc = acc[1].getElementsByTagName("a")
var oEnmin = document.getElementsByClassName("enmin")[0].getElementsByTagName("div")
acc1.onclick = function(){
	qr[0].style.color = "black";
	qr[0].style.fontWeight = "normal";
	acc[0].style.color = "#e4393c";
	acc[0].style.fontWeight = "bold";
	oEnmin[0].style.display = "none";
	oEnmin[2].style.display = "block";
}
qr1.onclick = function(){
	qr[0].style.color = "#e4393c";
	qr[0].style.fontWeight = "bold";
	acc[0].style.color = "black";
	acc[0].style.fontWeight = "normal";
	oEnmin[0].style.display = "block";
	oEnmin[2].style.display = "none";
}
var ipt = document.getElementsByTagName("form")[0].getElementsByTagName("input");
var mis = document.getElementsByClassName("mis")[0];
var userName = ipt[0];
var pwd = ipt[1];
var btn = ipt[2];
var obj = {name:"admin",pwd:"123"}
btn.onclick = function(){
	if(userName.value != "" && pwd.value != ""){
		userName.style.backgroundPosition = "0 0";
		userName.style.borderColor = "#bdbdbd";
		mis.style.visibility = "hidden";
		pwd.style.backgroundPosition = "0 0";
		pwd.style.borderColor = "#bdbdbd";
		if(userName.value == obj.name && pwd.value == obj.pwd){
			window.location.href = "index.html?userName=" + userName.value;
			mis.style.visibility = "hidden";
		}else{
			mis.style.visibility = "visible";
			mis.innerHTML = "用户名和密码不匹配，请重新输入"
		}
		
	}else if(userName.value == "" && pwd.value == ""){
		userName.style.borderColor = "red";
		pwd.style.borderColor = "red";
		userName.style.backgroundPosition = "0 -74px";
		pwd.style.backgroundPosition = "0 -74px";
		userName.focus()
		mis.style.visibility = "visible";
		mis.innerHTML = "请输入账户名和密码";
	}else if(userName.value == ""){
		userName.style.backgroundPosition = "0 -74px";
		userName.style.borderColor = "red";
		pwd.style.backgroundPosition = "0 0";
		pwd.style.borderColor = "#bdbdbd";
		mis.style.visibility = "visible";
		mis.innerHTML = "请输入账户名";
		userName.focus()
		
	}else if(pwd.value == ""){
		userName.style.backgroundPosition = "0 0";
		userName.style.borderColor = "#bdbdbd";
		pwd.style.backgroundPosition = "0 -74px";
		pwd.style.borderColor = "red";
		mis.style.visibility = "visible";
		mis.innerHTML = "请输入密码";
		pwd.focus()
	}
}