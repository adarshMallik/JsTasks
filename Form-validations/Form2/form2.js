// Get data form user 

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
     e.preventDefault()
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("psw").value;
    formValidation(emailValue, passwordValue)
});


formValidation = (email, password) => {
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("pswError");
    let success = document.getElementById("success");
    if (email == ""  || password == "")
    {
        
        if (email == "") {
            emailError.innerText = "Enter a valid Email Id"
            emailError.style.color = "red"
        } else {
            emailError.innerText = "";
        }

        if (password == "") {
            passwordError.innerText = "Enter a valid password"
            passwordError.style.color = "red"
        } else {
            passwordError.innerText = ""
        }
    }else if(!email.includes("@"))
    {
        emailError.innerText = "Not a Valid Email"
        emailError.style.color = "red"
    }
    else if(password.length < 6)
    {
        passwordError.innerText = "Password should have more than 6 characters"
        passwordError.style.color = "red"
    }
    
    else {
        emailError.innerText = "";
        passwordError.innerText = "";

        success.innerText = "Submitted Successfully"
        success.style.color = "green"
        success.style.fontSize = "200%"
    }
}