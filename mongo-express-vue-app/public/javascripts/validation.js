function checkPass() {
  var password = document.getElementById("password").value;
  var retypePassword = document.getElementById("retype").value;
  var error = document.getElementById("retype_error");
  if (retypePassword != password) {
    error.innerHTML = "Password does not match, try again";
    return false;
  } else {
    error.innerHTML = "";
    return true;
  }
}
