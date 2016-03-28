	
	
		var fName;    
		var lName; 
	
		function login()
		{    
			fname=document.getElementById("txtFName").value;    
			lName = document.getElementById("txtLName").value;    
			localStorage.setItem("firstName", fName);     
			sessionStorage.setItem("lastName", lName);
			alert("Test");
		}
		
		function next()
		{ 	
		document.getElementById("loggedIn").innerHTML = sessionStorage.getItem("fname")+" is Logged in!";
		
		}
		
		function logout()
		{   sessionStorage.removeItem("lastName");     
			document.getElementById("mySession").innerHTML = "Successfully Logged Out!";     
		} 
		
		function clearLocal()
		{	localStorage.removeItem("firstName");         
			document.getElementById("rememberMe").innerHTML = "Successfully Cleared Local Storage!"; 
		}
	
	
	//Check to see if Local Storage is set
		if (localStorage.getItem("firstName") == null){	
		document.getElementById("rememberMe").innerHTML = "I Don't Remember you from Local Storage";
		}
		else
		{document.getElementById("rememberMe").innerHTML = "Welcome Back "+localStorage.getItem("firstName");}

		//Check to see if Session Storage is set
		if (sessionStorage.getItem("lastName") == null){	
		document.getElementById("mySession").innerHTML = "Session Not Set";
		}
		else
		{document.getElementById("mySession").innerHTML = sessionStorage.getItem("lastName")+" is Logged in!";}