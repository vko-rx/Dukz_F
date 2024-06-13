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
    .post("http://localhost:3000/user/getName", {
        userid
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
    .get("http://localhost:3000/user/getCardNews")
    .then((response) => {
      const firstCardNews = response.data[0];
      const secondCardNews = response.data[1];
      const thirdCardNews = response.data[2];

      const hashtagContainer = document.querySelector(".hashtag-container");
      hashtagContainer.innerHTML = "";
      firstCardNews.hashtags.forEach((tag) => {
        const spanTag = document.createElement("span");
        spanTag.textContent = `#${tag}`;
        hashtagContainer.appendChild(spanTag);
      });

      const hashtagContainer2 = document.querySelector(".hashtag-container-2");
      hashtagContainer2.innerHTML = "";
      secondCardNews.hashtags.forEach((tag) => {
        const spanTag = document.createElement("span");
        spanTag.textContent = `#${tag}`;
        hashtagContainer2.appendChild(spanTag);
      });

      const hashtagContainer3 = document.querySelector(".hashtag-container-3");
      hashtagContainer3.innerHTML = "";
      thirdCardNews.hashtags.forEach((tag) => {
        const spanTag = document.createElement("span");
        spanTag.textContent = `#${tag}`;
        hashtagContainer3.appendChild(spanTag);
      });

      document.getElementById("profileImage").src = `http://localhost:3000${firstCardNews.userInfo.profileImage}`;
      document.getElementById("nickname").textContent = firstCardNews.userInfo.nickname;
      document.getElementById("cardNewsTitle").textContent = firstCardNews.cardNews.title;
      document.getElementById("cardNewsDate").textContent = formatDate( firstCardNews.cardNews.createDate);
      document.getElementById("cardNewsImage").src = `http://localhost:3000${ firstCardNews.cardNews.image_url}`;
      document.getElementById("cardNewsLocation").textContent =  firstCardNews.cardNews.place;
      document.getElementById("cardNewsTime").textContent =  firstCardNews.cardNews.open_time + "~" +  firstCardNews.cardNews.close_time;
      document.getElementById("cardNewsPrice").textContent =  firstCardNews.cardNews.price;

      document.getElementById("profileImage2").src = `http://localhost:3000${secondCardNews.userInfo.profileImage}`;
      document.getElementById("nickname2").textContent = secondCardNews.userInfo.nickname;
      document.getElementById("cardNewsTitle2").textContent = secondCardNews.cardNews.title;
      document.getElementById("cardNewsDate2").textContent = formatDate(secondCardNews.cardNews.createDate);
      document.getElementById("cardNewsImage2").src = `http://localhost:3000${secondCardNews.cardNews.image_url}`;
      document.getElementById("cardNewsLocation2").textContent = secondCardNews.cardNews.place;
      document.getElementById("cardNewsTime2").textContent = secondCardNews.cardNews.open_time + "~" + secondCardNews.cardNews.close_time;
      document.getElementById("cardNewsPrice2").textContent = secondCardNews.cardNews.price;

      document.getElementById("profileImage3").src = `http://localhost:3000${thirdCardNews.userInfo.profileImage}`;
      document.getElementById("nickname3").textContent = thirdCardNews.userInfo.nickname;
      document.getElementById("cardNewsTitle3").textContent = thirdCardNews.cardNews.title;
      document.getElementById("cardNewsDate3").textContent = formatDate(thirdCardNews.cardNews.createDate);
      document.getElementById("cardNewsImage3").src = `http://localhost:3000${thirdCardNews.cardNews.image_url}`;
      document.getElementById("cardNewsLocation3").textContent = thirdCardNews.cardNews.place;
      document.getElementById("cardNewsTime3").textContent = thirdCardNews.cardNews.open_time + "~" + thirdCardNews.cardNews.close_time;
      document.getElementById("cardNewsPrice3").textContent = thirdCardNews.cardNews.price;

    })
    .catch((error) => {
      console.error(error);
    });
}

function getDiary() {
  const userid = localStorage.getItem("userid");

  axios
    .post("http://localhost:3000/user/getRecommendedDiaries", {
      userid: userid
    })
    .then((response) => {
      const recommendedDiaries = response.data.recommendedDiaries;

      console.log(recommendedDiaries);

      if (Array.isArray(recommendedDiaries)) {
        recommendedDiaries.forEach((diaryGroup, index) => {
          const placeContainerClass = `.place-container.place-${["first", "second", "third"][index]}`;

          const titleContent = diaryGroup.find(diary => diary.contentType === 'title');
          const firstContent = diaryGroup.find(diary => diary.contentType === 'content');
          const firstImage = diaryGroup.find(diary => diary.contentType === 'image');

          if (titleContent) {
            const titleElement = document.querySelector(`${placeContainerClass} .place-title`);
            if (titleElement) {
              titleElement.textContent = titleContent.content;
            }
          }

          if (firstContent) {
            const infoElement = document.querySelector(`${placeContainerClass} .place-info`);
            if (infoElement) {
              infoElement.textContent = firstContent.content;
            }
          }

          if (firstImage) {
            const imgElement = document.querySelector(`${placeContainerClass} .place-img`);
            if (imgElement) {
              imgElement.src = `http://localhost:3000${firstImage.imageSrc}`;
            }
          }
        });
      } else {
        console.log("추천 일지 데이터가 올바르지 않습니다.");
      }
    })
    .catch((e) => {
      console.log(e);
    });
}



getDiary();
getName();
getCardNews();