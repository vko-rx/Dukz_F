function bookmarkChk(obj) {
    if (obj.src.includes('un_check')) {
        obj.src = "../../Image/icon/card_icon/bookmark/check.png";
        // 카드뉴스를 북마크에 추가
    } else {
        obj.src = "../../Image/icon/card_icon/bookmark/un_check.png";
        // 카드뉴스를 북마크에서 해제
    }
}