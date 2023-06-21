let formDetails = document.getElementById("login-btn");

formDetails.addEventListener("click",(event) => {
    event.preventDefault();
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log("Username: " + userName);
    console.log("Password: " + password);
})