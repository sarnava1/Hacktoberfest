

var button=document.querySelector("button");
var isYellow=false;
button.addEventListener("click",function(){
	if(isYellow)
	document.body.style.background="white";
    else
     	document.body.style.background="yellow";
	isYellow=!isYellow;
});