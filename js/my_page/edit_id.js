function chkTxt() {
    // if (비밀번호가 다르면)
    // removeHidden(editChkTxt);
    // editChkTxt.style.color = '#FF4B4B';
    // editChkTxt.innerHTML = '정확한 비밀번호를 입력해야 아이디를 수정할 수 있습니다';
    // else 
    editChkTxt.style.color = '#5C5C5C';
    editChkTxt.innerHTML = '올바른 비밀번호입니다';
    removeDisabled(editBtn);
    removeDisabled(inputTxt);
    addDisabled(chkTxtDiv);
}
