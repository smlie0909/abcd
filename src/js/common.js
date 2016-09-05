document.addEventListener("DOMContentLoaded",function(){
	var designWidth = 320;
	var ratio = document.documentElement.clientWidth/designWidth*100;
	document.documentElement.style.fontSize = ratio + "px";
},false)