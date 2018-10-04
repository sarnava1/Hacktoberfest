function random_bg_color(){

        var rgbcolor;
        red = Math.floor(Math.random() * 250 + 0 );
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);

        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.body.style.background = rgbColor;


        red = ("0" + red.toString(16)).substr(-2).toUpperCase();
        green = ("0" + green.toString(16)).substr(-2).toUpperCase();
        blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();


        }

        random_bg_color();

        
let button=document.querySelector("button");
let filled=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(filled)
	random_bg_color();
    else
     	document.body.style.background="yellow";
     filled=!filled;
});
