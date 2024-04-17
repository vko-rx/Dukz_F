const nowDate = document.getElementsByClassName('now-date')[0];
function dateChange(obj) {
    let dateTxt = document.getElementsByClassName('date-txt');
    for (let x of dateTxt) {
        if (x === obj) {
            x.classList.add('date-here');
            nowDate.innerHTML = x.innerHTML;
        } else {
            x.classList.remove('date-here');
        }
    }
}