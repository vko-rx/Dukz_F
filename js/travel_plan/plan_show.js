const nothingDiv = document.getElementsByClassName('nothing-container')[0];

const gridDiv = document.getElementsByClassName('plan-grid-container')[0];
const moreDiv = document.getElementsByClassName('plan-more')[0];

// 서버에서 일정 불러온 다음 호출
isTherePlan();

// grid에 일정이 있는지 없는지 확인
function isTherePlan() {
    let gridItem = document.getElementsByClassName('grid-item');

    if (gridItem.length === 0) {
        moreDiv.classList.add('hidden');
        gridDiv.classList.add('hidden');
        nothingDiv.classList.remove('hidden');
        return;
    }
    
    if (gridItem.length < 4){
        moreDiv.classList.add('hidden');
    } else {
        moreDiv.classList.remove('hidden');
    }
    
    nothingDiv.classList.add('hidden');
    gridDiv.classList.remove('hidden');
}