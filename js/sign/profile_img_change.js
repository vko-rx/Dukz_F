let profileImg = document.getElementById('profile-img');
let nextBtn = document.getElementsByClassName('next-btn')[0];

function useDefault() {
    profileImg.src = "../../../Image/profile/profile_img_default.png";
}

function modalVisible() {
    document.getElementsByClassName('modal-container')[0].style.visibility = 'visible';
}

function chkToNext() {
    nextBtn.removeAttribute("disabled");
    nextBtn.classList.remove('disabled');
}