const subInputDiv = document.getElementsByClassName('sub-input-container')[0];

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
    subInputDiv.innerHTML = "<label class='size-group'><input type='radio' name='sub-input' value='title' checked><span>제목</span></label><label class='size-group'><input type='radio' name='sub-input' value='title'><span>부제목</span></label><label class='size-group'><input type='radio' name='sub-input' value='title'><span>본문</span></label>"
    // subInputDiv.onchange = text_sub_onchange();
}

const image_onchange = () => {
    subInputDiv.innerHTML = "<label class='size-group'><input type='radio' name='sub-input' value='camera'><span><img src='../../../Image/icon/camera/camera.svg'></span></label><label class='size-group'><input type='radio' name='sub-input' value='image'><span><img src='../../../Image/icon/camera/image.svg'></span></label>"
}

const align_onchange = () => {
    subInputDiv.innerHTML = "<label class='size-group'><input type='radio' name='sub-input' value='left' checked><span><img src='../../../Image/icon/align/left.svg'></span></label><label class='size-group'><input type='radio' name='sub-input' value='center'><span><img src='../../../Image/icon/align/center.svg'></span></label><label class='size-group'><input type='radio' name='sub-input' value='right'><span><img src='../../../Image/icon/align/right.svg'></span></label>"
}

const create_plan_onchange = () => {
    subInputDiv.innerHTML = "";
}

const import_plan_onchange = () => {
    subInputDiv.innerHTML = "";
}