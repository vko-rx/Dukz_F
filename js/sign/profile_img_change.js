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

function uploadImage() {
    const formData = new FormData(document.getElementById('uploadForm'));
    const email = localStorage.getItem('email');

    axios.post('http://localhost:3000/user/signup5', formData, {
        email : email,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then(response => {
        console.log('Image upload response:', response.data);

        if (response.data.success) {
            const imageUrl = response.data.image_url;
            console.log('Image URL:', imageUrl);
            document.getElementById('result').innerHTML = 'Image uploaded successfully. Image URL: ' + imageUrl;
            // location.href='./input_birth.html';
        } else {
            console.error('Image upload failed:', response.data.message);
            document.getElementById('result').innerHTML = 'Image upload failed: ' + response.data.message;
        }
    })
    .catch(error => {
        console.error('Error during image upload:', error);
    });
}
