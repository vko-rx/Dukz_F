const textDiv = document.getElementsByClassName('text-container')[0];
const imageDiv = document.getElementsByClassName('image-container')[0];
const alignDiv = document.getElementsByClassName('align-container')[0];

const input_onchange = () => {

    const inputValue = document.querySelector('input[name="input"]:checked').value;

    switch(inputValue) {
        case "text": text_onchange(); break;
        case "image": image_onchange(); break;
        case "align": align_onchange(); break;
        case "create-plan": create_plan_onchange(); break;
        case "import-plan": import_plan_onchange(); break;
    } 
}

const text_onchange = () => {
    textDiv.classList.remove('hidden');
    imageDiv.classList.add('hidden');
    alignDiv.classList.add('hidden');
}

const image_onchange = () => {
    imageDiv.classList.remove('hidden');
    textDiv.classList.add('hidden');
    alignDiv.classList.add('hidden');
    
}

const align_onchange = () => {
    alignDiv.classList.remove('hidden');
    textDiv.classList.add('hidden');
    imageDiv.classList.add('hidden');
}

const create_plan_onchange = () => {
}

const import_plan_onchange = () => {
}