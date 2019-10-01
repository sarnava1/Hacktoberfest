let button = document.querySelector("button");
//let filled=false;
//button.addEventListener("click",function(){
//	//alert('connected');
//	if(filled)
//	document.body.style.background="blue";
//    else
//     	document.body.style.background="yellow";
//     filled=!filled;
//});
button.onclick = function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //document.body.style = 'rgb('r + ', ' + g + ', ' + b')';
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}