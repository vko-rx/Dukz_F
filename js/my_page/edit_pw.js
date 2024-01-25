function chkTxt() {
    // if (이메일이 다르면)
    // removeHidden(editChkTxt);
    // editChkTxt.style.color = '#FF4B4B';
    // editChkTxt.innerHTML = '이메일을 확인해야 비밀번호를 수정할 수 있습니다';
    // else 
    editChkTxt.style.color = '#5C5C5C';
    editChkTxt.innerHTML = '올바른 비밀번호입니다';
    removeDisabled(editBtn);
    removeDisabled(inputTxt);
    addDisabled(chkTxtDiv);
}
