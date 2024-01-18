let time = 180;
let min = "";
let sec = "";

let timerDiv = document.getElementById('timer');

var x = setInterval(function() {
    min = parseInt(time / 60);
    sec = time % 60;

    timerDiv.innerHTML = min + ":" + sec;
    time--;

    if (time < 0) {
        clearInterval(x);
        location.href = "../../../html/sign/sign_up/email_confirm.html";
    }
}, 1000);