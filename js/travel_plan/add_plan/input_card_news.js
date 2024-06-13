document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.hashtag');

    input.addEventListener('input', () => {
        if (!input.value.startsWith('#')) {
            input.value = '#' + input.value.replace(/^#+/, '');
        } else if (input.value === '#') {
            input.setSelectionRange(1, 1);
        }
    });

    input.addEventListener('keydown', (event) => {
        if (input.selectionStart === 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
            event.preventDefault();
        }
    });

    input.addEventListener('focus', () => {
        if (input.value === '#') {
            input.setSelectionRange(1, 1);
        }
    });

    const yenInput = document.getElementById('yen-input');
    const yenTxt = document.getElementById('yen-txt');
    yenInput.addEventListener('input', () => {
        if(yenInput.value.length > 0) {
            yenTxt.style.display = 'block';
        } else {
            yenTxt.style.display = 'none';
        }
    })

});

const CardNewsmodal = document.getElementById("card-news-modal");
const closeModal = document.getElementsByClassName("close")[1];
const openBtn = document.getElementById("open-card-modal");
const timeTxtSpan= document.getElementById("time");


openBtn.onclick = function () {
    if (nowPage.querySelectorAll('.time-text').length === 0) {
        alert("시간을 먼저 입력해 주세요")
        return;
    }
    var timeTexts = nowPage.querySelectorAll('.time-text');
    var lastTimeText = timeTexts[timeTexts.length - 1].textContent;
    timeTxtSpan.innerHTML = lastTimeText;



    CardNewsmodal.style.display = "block";
}

closeModal.onclick = function () {
    CardNewsmodal.style.display = "none";
}