//External JavaScript File

function login() //User-defined finction 'login()' is called when the Login button is clicked on
{   
	var fName; //Local variable  declaration  
	var lName;
	fName = document.getElementById("txtFName").value;  //Assigns value from the id 'txtFName' (first name of user)to the variable 'fname'  using HTML DOM document
	lName = document.getElementById("txtLName").value;    
	localStorage.setItem("firstName", fName);   // First name is locally stored at the client's device until it is deleted
	document.getElementById("rememberMe").innerHTML = "Local Storage Set to "+localStorage.getItem("firstName"); //Replaces the text on the screen  
	sessionStorage.setItem("lastName", lName);  //Last name is stored on the device until the session ends (the browser is closed)
	document.getElementById("mySession").innerHTML = sessionStorage.getItem("lastName")+" is Logged in!";      
} 
		
function logout() // This function is called when the Logout button is clicked on
{   
	sessionStorage.removeItem("lastName");  //Removes the data(last name) saved on the device using sessionstorage 
	document.getElementById("mySession").innerHTML = "Successfully Logged Out!";   //Displays changed message on the screen  
} 
		
function clearLocal() // This function is called when the Clear button is clicked on
{	
	localStorage.removeItem("firstName");  //Deletes the data (First name) saved in device using localstorage       
	document.getElementById("rememberMe").innerHTML = "Successfully Cleared Local Storage!"; 
}
	
//Check to see if Local Storage is set
if (localStorage.getItem("firstName") == null) // If First Name is not entered
{	
	document.getElementById("rememberMe").innerHTML = "I Don't Remember you from Local Storage"; // Tell user that your first name is not htere in the local storage
}
else // If user has entered his/her first name
{
	document.getElementById("rememberMe").innerHTML = "Welcome Back "+localStorage.getItem("firstName");
} // Display his/her first name on the screen retrived from the local storage

		
//Check to see if Session Storage is set
if (sessionStorage.getItem("lastName") == null) //If Last Name is not entered
{	
	document.getElementById("mySession").innerHTML = "Session Not Set"; // Tell user that the session is not set yet
}
else // If user has entered his/her last name
{
	document.getElementById("mySession").innerHTML = sessionStorage.getItem("lastName")+" is Logged in!";
} // Display his/her last name on the screen retrived from the session storage
	