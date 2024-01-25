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
function chktoCanEdit() {
    if (hiddenDiv.classList.contains('hidden')) {
        // 비밀번호 입력 전
        removeHidden(hiddenDiv);
        addDisabled(editBtn);
    } else { // 입력 후
        // if (아이디가 중복되면) 
        // editComplite.innerHTML = '이미 사용하고 있는 아이디입니다';
        // editComplite.style.color = '#FF4B4B';
        // else
        editComplite.innerHTML = '아이디가 성공적으로 수정되었습니다';
        editComplite.style.color = '#5C5C5C';
        removeHidden(editComplite);

    }
}