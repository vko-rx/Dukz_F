function checkCheckboxes() {
    let chk1 = document.getElementById("chk-1");
    let chk2 = document.getElementById("chk-2");
    let chk3 = document.getElementById("chk-3");
    let line_color = document.getElementsByClassName("line-color")[0];

    let checkboxes = [chk1, chk2, chk3];
    let signupBtn = document.querySelector(".signup-btn");

    for (let i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            signupBtn.classList.add('disabled');
            signupBtn.disabled = true;
            line_color.style.width = 0;
            return;
        }
    }
    signupBtn.classList.remove('disabled');
    signupBtn.disabled = false;
    line_color.style.width = '20%';
}