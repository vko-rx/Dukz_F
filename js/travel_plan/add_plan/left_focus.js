const inputTitle = document.getElementById('input-title');
const writeContainer = document.getElementsByClassName('write-container')[0];
let nowPage;

const titleFocus = () => {
    inputTitle.classList.remove('hidden');
    inputTitle.focus();
    document.getElementById('title-radio').checked = true;
    document.getElementById('make-title').checked = true;
    document.getElementsByClassName('title-container')[0].classList.remove('hidden');
    document.getElementsByClassName('make-plan-container')[0].classList.add('hidden');
    document.getElementsByClassName('bring-plan-container')[0].classList.add('hidden');

    for (let i = 0; i < writeContainer.children.length - 1; i++) {
        document.getElementsByClassName('day-page')[i].classList.add('hidden');
    }
}
const titleUnFocus = () => {
    inputTitle.classList.add('hidden');
    if (document.querySelector('input[name="left"]:checked').value == 't') {
        document.getElementById('firstPage').checked = true;
        document.getElementsByClassName('day-page')[0].classList.remove('hidden');
    }
   
    nowPageChange();
}

const pageFocus = (pageNum) => {
    const pageDayDiv = document.getElementById('page-day');
    pageDayDiv.innerHTML = pageNum;
    titleUnFocus();

    for (let i = 0; i < writeContainer.children.length - 1; i++) {
        if (pageNum - 1 !== i) {
            document.getElementsByClassName('day-page')[i].classList.add('hidden');
        } else {
            document.getElementsByClassName('day-page')[i].classList.remove('hidden');
        }
    }
    nowPageChange();
}

const nowPageChange = () => {
    for (let pageDiv of writeContainer.children) {
        if (!pageDiv.classList.contains('hidden')) {
            nowPage = pageDiv;
            break;
        }
    }
}


const addPage = () => {
    // left-container 라벨 추가
    const leftContainer = document.getElementsByClassName('left-container')[0];
    const addPageButton = document.getElementById('add_page').parentNode;
    const newIndex = leftContainer.children.length - 1;

    const newLabel = document.createElement('label');
    newLabel.className = 'left-group page';

    const newInput = document.createElement('input');
    newInput.type = 'radio';
    newInput.name = 'left';
    newInput.value = newIndex;
    newInput.onclick = () => {
        pageFocus(newIndex)
    };

    const newSpan = document.createElement('span');
    newSpan.textContent = newIndex;

    newLabel.appendChild(newInput);
    newLabel.appendChild(newSpan);

    leftContainer.insertBefore(newLabel, addPageButton);


    // write-container 일정 추가
    const dayPage = document.createElement('div');
    dayPage.className = `day-page page${newIndex}`
    newInput.checked = true;
    writeContainer.appendChild(dayPage);
    titleUnFocus();
    pageFocus(newIndex);
}