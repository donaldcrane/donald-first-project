function Validation(){
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var password2 = document.getElementById('password2').value;
	var essay = document.getElementById('essay').value;
	var error = document.getElementById('error');
	var text;


	error.style.padding = "10px";

	if(firstname.length < 4){
		text = "Name must be at least 4 characters";
		error.innerHTML = text;
		return false;
	}else if(lastname.length < 4){
		text = "Name must be at least 4 characters";
		error.innerHTML = text;
		return false;
	}else if(password.length < 4){
		text = "password too weak";
		error.innerHTML = text;
		return false;
	}else if(password != password2){
		text = "password do not match";
		error.innerHTML = text;
		return false;
	}else if(essay < 25){
		text = "Text too short!";
		error.innerHTML = text;
		return false;
	}else if(email.indexOf("@") == -1 || email.length < 6){
		text = "Enter a valid email";
		error.innerHTML = text;
		return false;
	}
	
	return false;
	
	


	
}

