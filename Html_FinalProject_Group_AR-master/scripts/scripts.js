function showSignUp(){
  document.getElementById("username").required = false;
  document.getElementById("password").required = false;
  document.getElementsByClassName('login-form')[0].style.display = "none";
  document.getElementsByClassName('login-form')[1].style.display = "none";
  document.getElementsByClassName('registration-form')[0].style.display = "block";
  document.getElementsByClassName('registration-form')[1].style.display = "block";
}
