function chkBookMark(obj) {
    if (obj.src.includes('white')) {
        obj.src = '../../Image/icon/bookmark/fill.png';
    } else {
        obj.src = '../../Image/icon/bookmark/white.png';
    }
}
function chkHeart(obj) {
    if (obj.src.includes('white')) {
        obj.src = '../../Image/icon/heart/fill.png';
    } else {
        obj.src = '../../Image/icon/heart/white.png';
    }
}

function chkBookMarkFill(obj) {
    if (obj.src.includes('un_fill')) {
        obj.src = '../../Image/icon/bookmark/fill.png';
    } else {
        obj.src = '../../Image/icon/bookmark/un_fill.png';
    }
}
function chkHeartFill(obj) {
    if (obj.src.includes('un_fill')) {
        obj.src = '../../Image/icon/heart/fill.png';
    } else {
        obj.src = '../../Image/icon/heart/un_fill.png';
    }
}