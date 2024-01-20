function chkBtnAble() {
    let chk = document.getElementsByClassName('genre-img');
    let chkBtn = document.getElementsByClassName('next-btn')[0];

    for (let i = 0; i < 9; i++) {
        if (chk[i].src.includes('un_selected')) {
            chkBtn.setAttribute("disabled", "disabled");
            chkBtn.classList.add('disabled');
        } else {
            chkBtn.removeAttribute("disabled");
            chkBtn.classList.remove('disabled');
            break;
        }
    }
}