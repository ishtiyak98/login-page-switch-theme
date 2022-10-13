const btn = document.getElementById("btn");
    const titleText = document.getElementById("titleText");
    const inputField = document.getElementsByTagName("input");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const forgotPass = document.getElementById("forgotPass");
    const signup = document.getElementById("signup");

    function changeColor(color){
        document.body.style.background = color;
        btn.style.background = color;
        btn.style.borderColor = color;
        titleText.style.borderColor = color;

        emailField.addEventListener('focus', (event) => {
            event.target.style.borderColor = color;
        });

        emailField.addEventListener('blur', (event) => {
            event.target.style.borderColor = "";
        });

        passwordField.addEventListener('focus', (event) => {
            event.target.style.borderColor = color;
        });

        passwordField.addEventListener('blur', (event) => {
            event.target.style.borderColor = "";
        });

        forgotPass.addEventListener('mouseover', (event) => {
            event.target.style.color = color;
        })

        forgotPass.addEventListener('mouseout', (event) => {
            event.target.style.color = "";
        })

        signup.addEventListener('mouseover', (event) => {
            event.target.style.color = color;
        })

        signup.addEventListener('mouseout', (event) => {
            event.target.style.color = "";
        })
    }