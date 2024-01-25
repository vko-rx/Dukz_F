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

function addDisabled() {
    emailConfirmBtn.setAttribute("disabled", "disabled");
    emailConfirmBtn.classList.add('disabled');
}

// 이메일 중복 체크
function chkEmail() {
    var email = document.getElementById("email").value;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    axios
    .post("http://13.208.214.110:3000/user/emailDuplicate", {
            email: email,
        })
        .then((response) => {
        if(!regex.test(inputEmail.value)){
            hiddenTxt.innerHTML = "이메일 형식이 올바르지 않습니다";
            hiddenTxt.style.color = "#FF4B4B";
            addDisabled();
        }
        else if (response.data.isDuplicate) {
            hiddenTxt.innerHTML = "이미 사용 중인 이메일입니다";
            hiddenTxt.style.color = "#FF4B4B";
            addDisabled();
        }else {
            hiddenTxt.innerHTML = "사용 가능한 이메일입니다";
            hiddenTxt.style.color = "#5C5C5C";
            emailConfirmBtn.removeAttribute("disabled");
            emailConfirmBtn.classList.remove('disabled');
        }
      })
      .catch((e) => {
        console.error("Error during duplicate check:", e);
        alert("에러가 발생했습니다.");
    });
}

// 이메일 인증번호 보내는 함수
function emailsubmit() {
    var email = document.getElementById("email").value;

    // LocalStorage에 이메일 저장
    localStorage.setItem('email', email);
  
    axios
    .post("http://13.208.214.110:3000/user/certificate", {
        email: email,
    })
    .then((response) => {
        location.href = './auth_request.html';
    })
    .catch((e) => {
        console.error("Error during duplicate check:", e);
        alert("에러가 발생했습니다.");
    });
}
