new Swiper('.diary-swiper', {
    slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
});

new Swiper('.card-img-swiper', {
    slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
});

function getName() {
    const userid = localStorage.getItem("userid");
    const usernick = document.getElementsByClassName('writer-nick');
  
    axios
    .post("http://localhost:3000/user/getName", {
        userid : userid
    })
    .then((response) => {
        const name = response.data.name;

        for (let i in usernick) {
            usernick[i].innerHTML = name;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

getName();