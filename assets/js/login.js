
var formContainer = document.getElementById('login');

var signup = function(){
	let regButton = document.getElementById('reg-button');
	regButton.addEventListener('click',function(){
	formContainer.innerHTML = '';
	formContainer.innerHTML = `<h3>Register</h3>
			<form action="/users/create" method="post">
				<input type="email" name="email" placeholder="E-Mail">
				<input type="text" name="name" placeholder="Username">
				<input type="password" name="password" placeholder="Password">
				<input type="password" name="confirm_password" placeholder="Confirm Password"><br>
				<button type="submit" class="btn btn-primary">Signup</button>
			</form>
			<div id="reg-button">
				<button type="button" class="btn btn-danger">Login</button>
			</div>
			<p>Already Registered?</p>`;

	formContainer.style.height = '90%';
	backToLogin();
    });
}

signup();


var backToLogin = function(){
	let regButton = document.getElementById('reg-button');
	regButton.addEventListener('click',function(){
		formContainer.innerHTML = '';
		formContainer.innerHTML = `<h3>Login</h3>
			<form ation="/users/create-session" method="post">
				<input type="email" name="email" placeholder="E-Mail">
				<input type="password" name="password" placeholder="Password"><br>
				<button type="submit" class="btn btn-primary">login</button>
			</form>
			<div id="reg-button">
				<button type="button" class="btn btn-danger">Register</button>
			</div>
			<p>New User?</p>`
		formContainer.style.height = '70%';
		signup();
	});
}