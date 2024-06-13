const placeInput = document.getElementsByClassName('place')[0];
const pinImage = document.getElementById('pin-image');

const yenImage = document.getElementById('yen-image');
const yenInput = document.getElementById('yen-input');
const yenTxt = document.getElementById('yen-txt');

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

    placeInput.addEventListener('input', () => {
        if(placeInput.value.length > 0) {
            pinImage.src = "../../Image/icon/card_icon/pin_24px.png";
        } else {
            pinImage.src = "../../Image/icon/card_icon/pin_uninput.png";
        }
    })

    yenInput.addEventListener('input', () => {
        if(yenInput.value.length > 0) {
            yenTxt.style.display = 'block';
            yenImage.src = "../../Image/icon/card_icon/yen_24px.png";
        } else {
            yenImage.src = "../../Image/icon/card_icon/yen_uninput.png";
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