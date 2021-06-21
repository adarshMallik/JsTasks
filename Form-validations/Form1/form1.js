// Get values entered in the text box after submit


let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    formValidation(firstName, lastName, gender, email, password)

});


function formValidation(fname, lname, gender, email, password) {
    let fnameError = document.getElementById('fnameError');
    let lnameError = document.getElementById('lnameError');
    let emailError = document.getElementById('emailError');
    let genderError = document.getElementById('genderError');
    let passwordError = document.getElementById('passwordError');
    let successMessage = document.getElementById('successMessage');

    // to check field is empty 
    if (fname == "" || lname == "" || email == "" || gender == 'default' || password == "")
    {
        
        if (fname == "") {
            fnameError.innerText = "Please Enter your First Name"
            fnameError.style.color = "red"
        } else {
            fnameError.innerText = ""
        }

        if (lname == "") {
            lnameError.innerText = "Please Enter your Last Name"
            lnameError.style.color = "red"
        } else {
            lnameError.innerText = ""
        }

        if (email == "") {
            emailError.innerText = "Please Enter Proper Email"
            emailError.style.color = "red"
        } else {
            emailError.innerText = ""
        }

        if (gender == "default") {
            genderError.innerText = "Please select gender"
            genderError.style.color = "red"
        } else {
            genderError.innerText = ""
        }

        if (password == "") {
            passwordError.innerText = "Please Enter Proper Password"
            passwordError.style.color = "red"
        } else {
            passwordError.innerText = ""
        }

    } else {
        // valid email check
        if(!email.includes("@"))
        {
            emailError.innerText = "Not a valid Email"
            emailError.style.color = "red"

        }
        // valid password check
        else if(password.length < 6)
        {
            passwordError.innerText = "Password should have more than 6 characters"
            passwordError.style.color = "red"
        }
        else
        {
        genderError.innerText = ""
        passwordError.innerText = ""
        emailError.innerText = ""
        lnameError.innerText = ""
        fnameError.innerText = ""

        successMessage.innerText = "Submitted Successfully"
        successMessage.style.color = "green"
        successMessage.style.fontSize = "200%"
        }

        

    }



}