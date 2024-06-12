const modal = document.getElementById("time-modal");
const btn = document.getElementById("open-time-modal");
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
    let selectedHourStart = parseInt(startHoursSelect.value);
    let selectedHourEnd = parseInt(endHoursSelect.value);
    let selectedMinuteStart = startMinutesSelect.value;
    let selectedMinuteEnd = endMinutesSelect.value;
    let selectedAmpmStart = document.getElementsByClassName('ampm')[0].value;
    let selectedAmpmEnd = document.getElementsByClassName('ampm')[1].value;

    let nowPage;

    for (let pageDiv of writeContainer.children) {
        if (!pageDiv.classList.contains('hidden')) {
            nowPage = pageDiv;
            break;
        }
    }

    let timeDiv = document.createElement('div');
    timeDiv.className = 'time-text';
    if (selectedAmpmStart == 'PM') selectedHourStart += 12;
    if (selectedAmpmEnd == 'PM') selectedHourEnd += 12;
    if (selectedHourStart.toString().length == 1) selectedHourStart = `0${selectedHourStart}`;
    if (selectedHourEnd.toString().length == 1) selectedHourEnd = `0${selectedHourEnd}`;


    timeDiv.innerHTML = `${selectedHourStart}:${selectedMinuteStart}~${selectedHourEnd}:${selectedMinuteEnd}`
    nowPage.appendChild(timeDiv);

        modal.style.display = 'none';
}