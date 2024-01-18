let doublechkBtn = document.getElementsByClassName('double-chk-btn')[0];
let hiddenTxt = document.getElementsByClassName('hidden-txt')[0];
let nextBtn = document.getElementsByClassName('next-btn')[0];

// 아이디 글자수 확인 -> 중복확인 버튼 활성화
function lengthChk(obj) {
    if (obj.value.length >= 4) {
        BtnAbled(doublechkBtn);
    } else {
        BtnDisabled(doublechkBtn);
    }
}

function BtnAbled(obj) {
    obj.removeAttribute("disabled");
    obj.classList.remove('disabled')
}
function BtnDisabled(obj) {
    obj.setAttribute("disabled", "disabled");
    obj.classList.add('disabled');
}

// 중복확인 눌렀을 경우 -> 아이디 중복 체크
function chkId() {
    var userid = document.getElementById("input-id").value;

    axios
    .post("http://localhost:3000/user/checkDuplicate", {
            userid: userid,
        })
        .then((response) => {
        if (response.data.isDuplicate) {
            hiddenTxt.innerHTML = "이미 사용하고 있는 아이디입니다";
            hiddenTxt.style.color = "#FF4B4B";
            BtnDisabled(nextBtn);
        }else {
            hiddenTxt.innerHTML = "사용 가능한 아이디입니다";
            hiddenTxt.style.color = "#5C5C5C";
            BtnAbled(nextBtn);
        }
        // ifelse문 바깥
        BtnDisabled(doublechkBtn);
      })
      .catch((e) => {
        console.error("Error during duplicate check:", e);
        alert("에러가 발생했습니다.");
    });
}