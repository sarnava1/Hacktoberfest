

var button=document.querySelector("button");
var isYellow=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(isYellow)
	document.body.style.background="white";
    else
     	document.body.style.background="Yellow";
     isYellow=!isYellow;
});