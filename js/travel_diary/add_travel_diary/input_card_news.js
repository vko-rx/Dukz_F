const placeInput = document.getElementsByClassName('place')[0];
const pinImage = document.getElementById('pin-image');

const timeImage = document.getElementById('time-image');

const yenImage = document.getElementById('yen-image');
const yenInput = document.getElementById('yen-input');
const yenTxt = document.getElementById('yen-txt');

const reviewInput = document.getElementById('review');

document.addEventListener('DOMContentLoaded', () => {

    placeInput.addEventListener('input', () => {
        if (placeInput.value.length > 0) {
            pinImage.src = "../../../Image/icon/card_icon/pin_24px.png";
        } else {
            pinImage.src = "../../../Image/icon/card_icon/pin_uninput.png";
        }
    })

    yenInput.addEventListener('input', () => {
        if (yenInput.value.length > 0) {
            yenTxt.style.display = 'block';
            yenImage.src = "../../../Image/icon/card_icon/yen_24px.png";
        } else {
            yenImage.src = "../../../Image/icon/card_icon/yen_uninput.png";
            yenTxt.style.display = 'none';
        }
    })

});

const CardNewsmodal = document.getElementById("card-news-modal");
const closeModal = document.getElementsByClassName("close")[0];
const timeTxtSpan = document.getElementById("time");


// 이미지 선택 및 표시
const addImage = document.querySelector('.card-image-container');
const imageInput = document.getElementById('image-input');

addImage.addEventListener('click', () => {
    imageInput.click();
});

let cardNewsImgSrc;
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const cardNewsImg = document.createElement('img');
            cardNewsImgSrc = e.target.result;
            cardNewsImg.src = e.target.result;
            cardNewsImg.classList.add('selected-image');
            addImage.appendChild(cardNewsImg);
        };
        reader.readAsDataURL(file);
    }
});

const cardOpen = () => {
    CardNewsmodal.style.display = "block";
}

closeModal.onclick = () => {
    CardNewsmodal.style.display = "none";
}
let starNumArr = [false, false, false, false, false]
const startController = (starNum) => {
    starNum = Number(starNum.match(/\d+/)[0]);
    for (let i = 1; i <= starNum; i++) {
        document.getElementById(`star${i}`).src = "../../../Image/icon/star/fill.png"
        starNumArr[i-1] = true;
    }
    for (let i = 5; i > starNum; i--) {
        document.getElementById(`star${i}`).src = "../../../Image/icon/star/un_fill.png"
        starNumArr[i-1] = false;
    }
}

const inputHash = document.querySelector('input[name=basic]');
let tagify = new Tagify(inputHash);

tagify.on('add', function () {
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
const firstStarImg = document.getElementById('star1');

cardSaveBtn.onclick = () => {

    // 유효성 검사
    if (addImage.children.length <= 2) {
        alert("이미지를 입력해주세요");
        return;
    } else if (!placeInput.value.length > 0) {
        alert("장소를 입력해주세요");
        return;
    } else if (timeTxtSpan.textContent == "시간을 입력해주세요") {
        alert("시간을 입력해주세요");
        return;
    } else if (firstStarImg.src.includes('un')) {
        alert("별점을 입력해주세요");
        return;
    } else if (!yenInput.value.length > 0) {
        alert("금액을 입력해주세요");
        return;
    } else if (!reviewInput.value.length > 0) {
        alert("후기를 입력해주세요")
        return;
    } else if (!tagify.value.length > 0) {
        alert("해시태그를 하나 이상 입력해주세요")
        return;
    }

    let starNumSrcArr = [];
    for (let i of starNumArr) {
        if (i) {
            starNumSrcArr.push("../../../Image/icon/star/fill.png")
        } else {
            starNumSrcArr.push("../../../Image/icon/star/un_fill.png")
        }
    }
    

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Inner HTML for the new card
    cardContainer.innerHTML = `
        <div class="place-title-container">
            <div class="place-title">
                <div class="place-name">${placeInput.value}</div>
            </div>
        </div>
        <div class="tempDiv">
            <img class="tempImg" src=${cardNewsImgSrc}>
        </div>
        <div class="info-container">
            <div class="line-container">
                <div class="info-sub-container category-container">
                    <img class="info-img place-img" src="../../../Image/icon/card_icon/pin_24px.png">
                    <a href="#" class="info-txt">${placeInput.value}</a>
                </div>
                <div class="star-rating">
                    <img class="star" src=${starNumSrcArr[0]}>
                    <img class="star" src=${starNumSrcArr[1]}>
                    <img class="star" src=${starNumSrcArr[2]}>
                    <img class="star" src=${starNumSrcArr[3]}>
                    <img class="star" src=${starNumSrcArr[4]}>
                </div>
            </div>
            <div class="info-sub-container">
                <img class="info-img time-img" src="../../../Image/icon/card_icon/time_24px.png">
                <span class="info-txt time">${timeTxtSpan.textContent}</span>
            </div>
            <div class="info-sub-container">
                <img class="info-img time-img" src="../../../Image/icon/card_icon/yen_24px.png">
                <span class="info-txt yen">${yenInput.value}円</span>
            </div>
            <div class="review-container">
                ${reviewInput.value}
            </div>
        </div>
    `;

    containerDiv.appendChild(cardContainer);

    CardNewsmodal.style.display = 'none';
}