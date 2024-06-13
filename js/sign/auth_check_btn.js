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

const email = localStorage.getItem('email');
document.getElementById('email-txt').innerHTML = email;

function authVerify() {
    var authCode = document.getElementById("authcode").value;

    axios
      .post("http://localhost:3000/user/checkAuthCode", {
        email: email,
        code: authCode,
      })
      .then((response) => {
        if (response.status === 200 && response.data.message === '인증번호가 확인되었습니다.') {
            hiddenTxtDiv.innerHTML = "인증되었습니다";
            hiddenTxtDiv.style.color = "#5C5C5C";
            nextBtn.removeAttribute("disabled");
            nextBtn.classList.remove('disabled');
            authRequestBtnDisabled();
        } else {
          hiddenTxtDiv.innerHTML = "인증코드가 일치하지 않습니다. 다시 확인해주세요.";
          hiddenTxtDiv.style.color = "#FF4B4B";
        }
      })
      .catch((e) => {
        console.error("Error during auth code check:", e);
        alert("에러가 발생했습니다.");
      });
}

function submit(){

    axios
    .post("http://localhost:3000/user/signup", { 
        email: email,
      })
      .then((response) => {
        console.log("Registration response:", response.data);
        if (response.data.message === "User registered successfully") {
            location.href='./input_id.html';
        }
      })
      .catch((e) => {
        console.error("Error during registration:", e);
        alert("에러가 발생했습니다.")
      });
}
