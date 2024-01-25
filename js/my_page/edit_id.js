function chkTxt() {
    const userid = localStorage.getItem("userid");
    const pw = document.getElementById('pw').value;

    // 서버에 비밀번호 확인 요청 보내기
    axios.post("http://13.208.214.110:3000/user/passwordTest", { userid, pw })
      .then(response => {
        // 비밀번호가 일치하는 경우
        editChkTxt.style.color = '#5C5C5C';
        editChkTxt.innerHTML = '올바른 비밀번호입니다';
        removeDisabled(editBtn);
        removeDisabled(inputTxt);
        addDisabled(chkTxtDiv);
      })
      .catch(error => {
        // 비밀번호가 일치하지 않는 경우
        editChkTxt.style.color = '#FF4B4B';
        editChkTxt.innerHTML = '정확한 비밀번호를 입력해야 아이디를 수정할 수 있습니다';
      });
}
