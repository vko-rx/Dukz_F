new Swiper('.swiper', {
  // slidesPerView: 1.2, // 한번에 보여줄 슬라이드 개수
    spaceBetween: -50, // 슬라이드 사이 여백
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    slideToClickedSlide: true // 해당 슬라이드 클릭시 슬라이드 위치로 이동
});

new Swiper('.swiper2', {
  // slidesPerView: 2, // 한번에 보여줄 슬라이드 개수
  spaceBetween: -170, // 슬라이드 사이 여백
  centeredSlides: false, // 1번 슬라이드가 가운데 보이기
  freeMode: true,
});

function getName() {
    const userid = localStorage.getItem("userid");
    const usernick = document.getElementsByClassName('user-nick');
  
    axios
    .post("http://13.208.214.110:3000/user/getName", {
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

function getCardNews() {

  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dateObject = new Date(dateString);
    
    const formattedDate = dateObject.toLocaleDateString('ko-KR', options)
      .split('.').join('.');
  
    return formattedDate;
  }
  
  axios
    .get("http://13.208.214.110:3000/user/getCardNews")
    .then((response) => {
      const cardNews = response.data.cardNews;
      const userInfo = response.data.userInfo;
      
      document.getElementById("profileImage").src = `http://13.208.214.110:3000${userInfo.profileImage}`;
      document.getElementById("nickname").textContent = userInfo.nickname;
      document.getElementById("cardNewsTitle").textContent = cardNews.title;
      document.getElementById("cardNewsDate").textContent = formatDate(cardNews.createDate);
      document.getElementById("cardNewsImage").src = `http://13.208.214.110:3000${cardNews.image_url}`;
      document.getElementById("cardNewsLocation").textContent = cardNews.place;
      // document.getElementById("googleMapLink").href = cardNews.googleMapLink;
      document.getElementById("cardNewsTime").textContent = cardNews.open_time + "~" + cardNews.close_time;
      document.getElementById("cardNewsPrice").textContent = cardNews.price;

      console.log("Card News:", cardNews);
      console.log("User Info:", userInfo);
    })
    .catch((error) => {
      console.error(error);
    });
}

getName();
getCardNews();