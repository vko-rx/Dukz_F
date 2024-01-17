function checkInputs() {
    var idInput = document.getElementById("id");
    var pwInput = document.getElementById("pw");
    var signinBtn = document.getElementById("signinBtn");

    if (idInput.value.length > 0 && pwInput.value.length > 0) {
        signinBtn.removeAttribute("disabled");
        signinBtn.classList.remove('disabled');
    } else {
        signinBtn.setAttribute("disabled", "disabled");
        signinBtn.classList.add('disabled');
    }
}