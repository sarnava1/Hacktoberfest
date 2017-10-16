

var button=document.querySelector("button");
var isBlue=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(isBlue)
	document.body.style.background="yellow";
    else
     	document.body.style.background="blue";
     isBlue=!isBlue;
});
