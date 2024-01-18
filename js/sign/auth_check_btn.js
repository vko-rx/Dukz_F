let authRequestBtn = document.getElementById('auth-request-btn');
let hiddenTxtDiv = document.getElementsByClassName('hidden-txt')[0];
let nextBtn = document.getElementById('next-btn');

// 최대 5글자까지 입력, 5글자까지 입력되었을 경우 인증하기 버튼 활성화
function maxLengthCheck(object) {
    if (object.value.length >= object.maxLength) {
        authRequestBtn.removeAttribute("disabled");
        authRequestBtn.classList.remove('disabled');
    } else {
        authRequestBtnDisabled();
    }
}

function authRequestBtnDisabled() {
    authRequestBtn.setAttribute("disabled", "disabled");
    authRequestBtn.classList.add('disabled');
}

// 인증하기 버튼 눌렀을 경우
function authVerify() {
    // if (인증 코드가 다르면)
    // hiddenTxtDiv.innerHTML = "인증되지 않았습니다";
    // hiddenTxtDiv.style.color = "#FF4B4B";
    // else 
    hiddenTxtDiv.innerHTML = "인증되었습니다";
    hiddenTxtDiv.style.color = "#5C5C5C";
    nextBtn.removeAttribute("disabled");
    nextBtn.classList.remove('disabled');
    authRequestBtnDisabled();

}