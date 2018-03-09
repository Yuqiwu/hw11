var svg = document.getElementById("s");
var stop = document.getElementById("stop");
var grow = document.getElementById("grow");
var bounce = document.getElementById("bounce");
var clear = document.getElementById("clear");
var timerID = 0;



var clearing = function(){
    svg.innerHTML = "";
}


var bouncing = function(e){
    //svg.innerHTML = "";
    var x = e.offsetX ;
    var y = e.offsetY;

    if ( x > 450){
	x = 450
	
    }
    if (x < 2){
	x = 2
    }
    if ( y > 480){
	y = 480
	
    }
    if (y < 1){
	y = 1
    }
    var xIncrement = 2;
    var yIncrement = 1;

    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    rect.setAttribute("x", x.toString());    
    rect.setAttribute("y", y.toString());
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 20);
    rect.setAttribute("fill" , "black");
    svg.appendChild(rect);

    var animate = function(){
	rect.setAttribute("x", x.toString());    
	rect.setAttribute("y", y.toString());

	if( x >= 450 || x <= 0){
	    xIncrement*=-1;
	}
	if ( y >= 480 || y <= 0 ){
	    yIncrement*=-1;
	}
	x+= xIncrement;
	y+= yIncrement;

     };
    timerID = setInterval(animate , 10);
}

//var stopping = function(){
//    clearInterval(timerID);
//}



svg.addEventListener("click" , bouncing);
clear.addEventListener("click", clearing);
