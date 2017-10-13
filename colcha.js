

var button=document.querySelector("button");
var isBlue=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(isBlue)
	document.body.style.background="white";
    else
     	document.body.style.background="yellow";
     isBlue=!isBlue;
});
