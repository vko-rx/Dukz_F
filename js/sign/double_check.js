// 이메일 text 작성 시 중복 확인 버튼 활성화
let inputEmail = document.getElementById('email');
let doublechkBtn = document.getElementsByClassName('double-chk-btn')[0];
let hiddenTxt = document.getElementsByClassName('hidden-txt')[0];
let emailConfirmBtn = document.getElementsByClassName('email-confirm-btn')[0];

inputEmail.addEventListener('input', function () {
    if (inputEmail.value.length > 0) {
        doublechkBtn.removeAttribute("disabled");
        doublechkBtn.classList.remove('disabled');
    } else {
        doublechkBtn.setAttribute("disabled", "disabled");
        doublechkBtn.classList.add('disabled');
    }
});

// 정규표현식으로 이메일 형식 확인
function chkEmail() {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(inputEmail.value)) {
        hiddenTxt.innerHTML = "이메일 형식이 올바르지 않습니다";
        hiddenTxt.style.color = "#FF4B4B";
        addDisabled();
    } else {
        chkDouble();
    }
}

function addDisabled() {
    emailConfirmBtn.setAttribute("disabled", "disabled");
    emailConfirmBtn.classList.add('disabled');
}

// 이메일 중복 체크
function chkDouble() {

    // if (중복된 이메일이 있다면)
    // hiddenTxt.innerHTML = "이미 사용 중인 이메일입니다";
    // hiddenTxt.style.color = "#FF4B4B";
    // addDisabled();
    // else 
    hiddenTxt.innerHTML = "사용 가능한 이메일입니다";
    hiddenTxt.style.color = "#5C5C5C";
    emailConfirmBtn.removeAttribute("disabled");
    emailConfirmBtn.classList.remove('disabled');
}