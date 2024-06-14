const placeInput = document.getElementsByClassName('place')[0];
const pinImage = document.getElementById('pin-image');

const yenImage = document.getElementById('yen-image');
const yenInput = document.getElementById('yen-input');
const yenTxt = document.getElementById('yen-txt');

document.addEventListener('DOMContentLoaded', () => {

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

// 이미지 선택 및 표시
const addImage = document.querySelector('.card-image-container');
const imageInput = document.getElementById('image-input');

addImage.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('selected-image');
            addImage.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

openBtn.onclick = () => {
    if (nowPage.querySelectorAll('.time-text').length === 0) {
        alert("시간을 먼저 입력해 주세요")
        return;
    }
    var timeTexts = nowPage.querySelectorAll('.time-text');
    var lastTimeText = timeTexts[timeTexts.length - 1].textContent;
    timeTxtSpan.innerHTML = lastTimeText;

    CardNewsmodal.style.display = "block";
}

closeModal.onclick = () => {
    CardNewsmodal.style.display = "none";
}

const startController = (starNum) => {
    starNum = Number(starNum.match(/\d+/)[0]);
    for (let i = 1; i <= starNum; i++) {
        document.getElementById(`star${i}`).src = "../../Image/icon/star/fill.png"
    }
    for (let i = 5; i > starNum; i--) {
        document.getElementById(`star${i}`).src = "../../Image/icon/star/un_fill.png"
    }
}

const input = document.querySelector('input[name=basic]');
let tagify = new Tagify(input);

tagify.on('add', function() {
    const lastTag = tagify.value[tagify.value.length - 1];
    
    // if (lastTag && lastTag.value.length > 5) {
    //     alert("태그는 5글자 이하로 입력해주세요");
    //     tagify.removeTag(lastTag.value);
    // } 
    if (tagify.value.length > 3) {
        alert("태그는 3개까지 입력할 수 있습니다");
        tagify.removeTag(lastTag.value);
    }
});

const cardSaveBtn = document.getElementById('cardSaveBtn');
cardSaveBtn.onclick = () => {
    console.log(tagify.value.length)
    // if (
    //     tagify.value.length &&

    // )
}