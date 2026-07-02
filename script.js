function checkPassword() {

let pass = document.getElementById("password").value;

if(pass === "1907"){

document.getElementById("password-screen").style.display="none";

document.getElementById("main-content").style.display="block";

}else{

document.getElementById("wrong").innerHTML="❌ Wrong Password! Try Again.";

}

}
