let nextBtn = document.getElementsByClassName('next-btn')[0];

function chkToNext(obj) {
    if (obj.value.length > 0) {
        nextBtn.removeAttribute("disabled");
        nextBtn.classList.remove('disabled')
    } else {
        nextBtn.setAttribute("disabled", "disabled");
        nextBtn.classList.add('disabled');
    }
}