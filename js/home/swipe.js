new Swiper('.swiper', {
    direction: 'horizontal', // 슬라이드 진행 방향, 기본값 horizontal(가로)
    loop: false, // 반복재생 여부
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 15, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    freeMode: false, // 슬라이드 넘길 때 위치 고정 여부
    autoHeight: true,  // 현재 활성 슬라이드높이 맞게 높이조정
    a11y: false, // 접근성 매개변수(접근성 관련 대체 텍스트 설정이 가능) 
    resistance: false, // 슬라이드 터치 저항 여부
    slideToClickedSlide: true, // 해당 슬라이드 클릭시 슬라이드 위치로 이동
    allowTouchMove: true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능

});