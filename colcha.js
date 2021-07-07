let button=document.querySelector("button");
let filled=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(filled)
	document.body.style.background="red";
    else
     	document.body.style.background="yellow";
     filled=!filled;
});
