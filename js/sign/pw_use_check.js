let hiddenTxt = document.getElementsByClassName('hidden-txt')[0];
let hiddenChkTxt = document.getElementsByClassName('hidden-chk-txt')[0];
let pwDiv = document.getElementById('pw');
let pwChkDiv = document.getElementsByClassName('pw')[0];
let nextBtn = document.getElementsByClassName('next-Btn')[0];

let letterCaseChk = document.getElementById('letter-case-chk');
let numberChk = document.getElementById('number-chk');
let specialCharChk = document.getElementById('special-char-chk');


let letterCaseRegex = new RegExp('[a-zA-Z]');
let numberRegex = new RegExp('[0-9]');
let specialCharRegex = new RegExp('[#?!@$ %^&*-].{1,}$');

function usePwChk() {
    if (letterCaseRegex.test(pwDiv.value)) {
        chkOk(letterCaseChk);
    } else {
        chkNot(letterCaseChk);
    }
    if (numberRegex.test(pwDiv.value)) {
        chkOk(numberChk);
    } else {
        chkNot(numberChk);
    }
    if (specialCharRegex.test(pwDiv.value)) {
        chkOk(specialCharChk);
    } else {
        chkNot(specialCharChk);
    }

    if (letterCaseRegex.test(pwDiv.value) && numberRegex.test(pwDiv.value) && specialCharRegex.test(pwDiv.value)) {
        hiddenTxt.style.color = '#5C5C5C';
        hiddenTxt.innerHTML = '사용 가능';
    } else {
        hiddenTxt.style.color = '#FF4B4B';
        hiddenTxt.innerHTML = '사용 불가능';
    }
    chkToNext();
}
function pwVerify() {
    if (pwChkDiv.value === pwDiv.value) {
        hiddenChkTxt.style.color = "#5C5C5C";
        hiddenChkTxt.innerHTML = "비밀번호 일치";
    } else {
        hiddenChkTxt.style.color = "#FF4B4B";
        hiddenChkTxt.innerHTML = "일치하지 않음";
    }
    chkToNext();
}
function chkToNext() {
    if (hiddenChkTxt.style.color === "rgb(92, 92, 92)" && hiddenTxt.style.color === 'rgb(92, 92, 92)') {
        nextBtn.removeAttribute("disabled");
        nextBtn.classList.remove('disabled');
    } else {
        nextBtn.setAttribute("disabled", "disabled");
        nextBtn.classList.add('disabled');
    }
}

function submit(){
    const email = localStorage.getItem('email');
    var pw = document.getElementById("pw").value;

    axios
    .post("http://localhost:3000/user/signup3", { 
        pw: pw,
        email: email,
      })
      .then((response) => {
        console.log("Registration response:", response.data);
        if (response.data.message === "User registered successfully") {
            location.href='./input_nick.html';
        }
      })
      .catch((e) => {
        console.error("Error during registration:", e);
        alert("에러가 발생했습니다.")
      });
}

function chkOk(obj) {
    obj.style.color = "#5C5C5C";
}
function chkNot(obj) {
    obj.style.color = "#A8A8A8";
}