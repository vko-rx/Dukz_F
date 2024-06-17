new Swiper('.plan-swiper', {
    spaceBetween: -120, // 슬라이드 사이 여백
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
});

function getName() {
    const userid = localStorage.getItem("userid");
    const usernick = document.getElementsByClassName('user-nick');
  
    axios
    .post("http://localhost:3000/user/getName", {
        userid
    })
    .then((response) => {
        const name = response.data.name;

        console.log(name);

        for (let i in usernick) {
            usernick[i].innerHTML = name;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

getName();
