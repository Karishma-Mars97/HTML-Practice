

var myElement; // declare global element variable
var myInterval; // declare global interval variable

function doMove() //Function to move an element
{
	myElement.style.left = parseInt(myElement.style.left)+1+'px'; // Increases the value of x coordinate of location of the element by 1;
	myElement.innerHTML="Click To Stop!"; // Changes text on the elements
} 

function restartMe() //Function to restart animation from the beginning
{
	myInterval = setInterval(doMove,10); // The function 'doMove' will be executed after every 10 milisecond of time interval
	myElement.style.left =0; //Initial horizontal position of the element
	myElement.style.background='red'; //Initial color of the element
}

function stopMe() //Function to stop an element
{
	window.clearInterval(myInterval); // Clears the value of variable 'myInterval'
	myElement.innerHTML="Double Click To Start!"; //Changes text on the element
	myElement.style.background='green'; //Changes color of the element from red to green
}

function restartMove() //Function to restart the animation from where it was stopped
{
	myInterval = setInterval(doMove,10); //Again sets the interval
	myElement.style.background='blue'; //Changes color of the element from green to blue
}

function followMe(e)
{
	var xPos = e.clientX; //Get x value from clients mouse
	myElement.style.left = xPos+'px'; // Assign the x valu to the queryselector
	myElement.innerHTML="You are at "+xPos+"px"; //Displays on the element depending on its dragend position
}

function init()  // This function initiates the animation when the page loads
{
	myElement = document.getElementById('box'); // A value of HTML DOM Document by id 'box' is assigned to a variable myElement
	myElement.style.left = '0px'; //Initializes the value of a queryselector
	myInterval = setInterval(doMove,10);
	document.getElementById("restartBtn").addEventListener("click", restartMe); // Restarts the animation when event of clicking the Restart button occurs
	myElement.addEventListener("click", stopMe); // Calls a function 'stopMe' when event 'Click' occurs
	myElement.addEventListener("dblclick", restartMove); // Calls a function 'restartMove' when event 'Double Click' occurs
	myElement.addEventListener("drag", followMe); // Calls a function 'followMe' when event 'drag' occurs
	myElement.addEventListener("dragend", followMe); // Calls a function 'followMe' when event 'dragend' occurs
}

window.onload = init; /*Function init() is called on loading the page*/