const titleDiv = document.getElementsByClassName('title-container')[0];
const makePlanDiv = document.getElementsByClassName('make-plan-container')[0];
const bringPlanDiv = document.getElementsByClassName('bring-plan-container')[0];

const input_onchange = () => {

    const inputValue = document.querySelector('input[name="input"]:checked').value;
    
    switch(inputValue) {
        case "text": textOnchange(); break;
        case "make-plan": makePlanOnchange(); break;
        case "bring-plan": bringPlanOnchange(); break;
    } 
}

const textOnchange = () => {
    titleDiv.classList.remove('hidden');
    makePlanDiv.classList.add('hidden');
    bringPlanDiv.classList.add('hidden');
    titleFocus();
}

const makePlanOnchange = () => {
    makePlanDiv.classList.remove('hidden');
    titleDiv.classList.add('hidden');
    bringPlanDiv.classList.add('hidden');
    titleUnFocus();
    
}

const bringPlanOnchange = () => {
    bringPlanDiv.classList.remove('hidden');
    titleDiv.classList.add('hidden');
    makePlanDiv.classList.add('hidden');
    titleUnFocus();
}