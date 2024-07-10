const checkPassword = () => {
  const password = document.getElementById("password");
  const retype = document.getElementById("retype");
  const error = document.getElementById("error");

  if (retype != password) {
    error.innerHTML = "Password is not match !";
    return false;
  } else {
    error.innerHTML = "";
    return true;
  }
};
