

var button=document.querySelector("button");
var isColored=false;
button.addEventListener("click",function(){
	//alert('connected');
		if(isColored)
				document.body.style.background="#FFFFFF";
	  else
	   		document.body.style.background="#FFFF00";
	     	isColored = !isColored;
});
