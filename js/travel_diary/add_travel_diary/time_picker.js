const modal = document.getElementById("time-modal");
const span = document.getElementsByClassName("close")[0];
const saveBtn = document.getElementById("saveBtn");

timeTxtSpan.onclick = function () {
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

const startHoursSelect = document.getElementsByClassName('hours')[0];
const startMinutesSelect = document.getElementsByClassName('minutes')[0];

const endHoursSelect = document.getElementsByClassName('hours')[1];
const endMinutesSelect = document.getElementsByClassName('minutes')[1];

for (let i = 1; i <= 12; i++) {
    let startOption = document.createElement('option');
    startOption.value = i;
    startOption.text = i;

    let endOption = document.createElement('option');
    endOption.value = i;
    endOption.text = i;

    startHoursSelect.appendChild(startOption);
    endHoursSelect.appendChild(endOption);
}
for (let i = 0; i < 60; i += 10) {
    let startOption = document.createElement('option');
    startOption.value = i < 10 ? '0' + i : i;
    startOption.text = i < 10 ? '0' + i : i;

    let endOption = document.createElement('option');
    endOption.value = i < 10 ? '0' + i : i;
    endOption.text = i < 10 ? '0' + i : i;

    startMinutesSelect.appendChild(startOption);
    endMinutesSelect.appendChild(endOption);
}


saveBtn.onclick = () => {
    let HourStart = parseInt(startHoursSelect.value);
    let HourEnd = parseInt(endHoursSelect.value);
    let MinuteStart = startMinutesSelect.value;
    let MinuteEnd = endMinutesSelect.value;
    let AmpmStart = document.getElementsByClassName('ampm')[0].value;
    let AmpmEnd = document.getElementsByClassName('ampm')[1].value;

    if (AmpmStart == 'PM') HourStart += 12;
    if (AmpmEnd == 'PM') HourEnd += 12;
    if (HourStart.toString().length == 1) HourStart = `0${HourStart}`;
    if (HourEnd.toString().length == 1) HourEnd = `0${HourEnd}`;

    let startTotalMinutes = parseInt(HourStart) * 60 + parseInt(MinuteStart);
    let endTotalMinutes = parseInt(HourEnd) * 60 + parseInt(MinuteEnd);

    if (startTotalMinutes >= endTotalMinutes) {
        alert("시작 시간이 종료 시간보다 크거나 같을 수 없습니다.");
        return 0;
    }

    if(HourEnd > 12) startHoursSelect.value = (parseInt(HourEnd) - 12).toString();
    else startHoursSelect.value = parseInt(HourEnd).toString();
    startMinutesSelect.value = MinuteEnd.toString();
    document.getElementsByClassName('ampm')[0].value = AmpmEnd;

    timeTxtSpan.innerHTML = `${HourStart}:${MinuteStart}~${HourEnd}:${MinuteEnd}`

    modal.style.display = 'none';

    timeImage.src = "../../../Image/icon/card_icon/time_24px.png";
    timeTxtSpan.style.color = "black";

}