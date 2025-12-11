function signup(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(username === "" || email === "" || pass === ""){
        alert("Please fill all fields!");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);

    alert("Signup Successful! Now Login.");
    window.location.href = "login.html";
}
function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPass = localStorage.getItem("userPass");

    if(email === savedEmail && pass === savedPass){
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Incorrect Email or Password!");
    }
}
