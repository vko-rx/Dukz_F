
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];
const saveBtn = document.getElementById("saveBtn");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const hoursSelect = document.getElementById('hours');
const minutesSelect = document.getElementById('minutes');
for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    hoursSelect.appendChild(option);
}
for (let i = 0; i < 60; i+=10) {
    let option = document.createElement('option');
    option.value = i < 10 ? '0' + i : i;
    option.text = i < 10 ? '0' + i : i;
    minutesSelect.appendChild(option);
}

saveBtn.onclick = function () {
    const selectedHour = hoursSelect.value;
    const selectedMinute = minutesSelect.value;
    const selectedAmpm = document.getElementById('ampm').value;
    // 이 밑으로 서버 작업하면 됨
}