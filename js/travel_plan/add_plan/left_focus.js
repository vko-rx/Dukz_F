const inputTitle = document.getElementById('input-title');

const titleFocus = () => {
    inputTitle.classList.remove('hidden');
    leftFocus();
}
const titleUnFocus = () => {
    inputTitle.classList.add('hidden');
    leftFocus();
}

const leftFocus = () => {
    const leftValue = document.querySelector('input[name="left"]:checked').value;
    switch (leftValue) {
        case "t": break;
    }
}
const addPage = () => {
    const leftContainer = document.getElementsByClassName('left-container')[0];
    const addPageButton = document.getElementById('add_page').parentNode;
    const newIndex = leftContainer.children.length - 1;
    
    const newLabel = document.createElement('label');
    newLabel.className = 'left-group page';
    
    const newInput = document.createElement('input');
    newInput.type = 'radio';
    newInput.name = 'left';
    newInput.value = newIndex;
    
    const newSpan = document.createElement('span');
    newSpan.textContent = newIndex;
    
    newLabel.appendChild(newInput);
    newLabel.appendChild(newSpan);
    
    leftContainer.insertBefore(newLabel, addPageButton);
}