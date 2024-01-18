let yearTxt = document.getElementById('year');
let monthTxt = document.getElementById('month');
let dayTxt = document.getElementById('day');

let nextBtn = document.getElementsByClassName('next-btn')[0];

function chkToNext() {
    if (yearTxt.value.length > 0 && monthTxt.value.length > 0 && dayTxt.value.length > 0) {
        nextBtn.removeAttribute("disabled");
        nextBtn.classList.remove('disabled')
    } else {
        nextBtn.setAttribute("disabled", "disabled");
        nextBtn.classList.add('disabled');
    }
}