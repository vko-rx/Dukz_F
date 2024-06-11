const containerDiv = document.getElementsByClassName('right-container')[0];

const textOnChange = () => {
    const subInputValue = document.querySelector('input[name="sub-input-text"]:checked').value;
    let txtDiv = document.createElement('textarea');

    switch(subInputValue) {
        case "title": 
        txtDiv.className = 'title-txt input-content'; 
        txtDiv.placeholder = '제목을 입력해주세요';
        break;
        case "sub-title": 
        txtDiv.className = 'sub-title-txt input-content'; 
        txtDiv.placeholder = '부제목을 입력해주세요';
        break;
        case "content": 
        txtDiv.className = 'content-txt input-content'; 
        txtDiv.placeholder = '본문을 입력해주세요';
        break;
    }

    containerDiv.appendChild(txtDiv);


    txtDiv.oninput = (event) => {
        const target = event.target;
      
        target.style.height = 0;
        target.style.height = target.scrollHeight + 'px';
    };

    alignOnChange()
}


const imageOnchange = (event) => {
    const reader = new FileReader();
    const image = document.createElement('img');
    reader.onload = function () {
        image.src = reader.result;
    }
    image.className = 'image-file';
    containerDiv.appendChild(image);
    reader.readAsDataURL(event.target.files[0]);
}

const alignOnChange = () => {
    const subInputValue = document.querySelector('input[name="sub-input-align"]:checked').value;
    const inputContainer = document.getElementsByClassName('input-content');
    switch(subInputValue) {
        case "left": 
            for (let x of inputContainer) {
                x.style.textAlign = "left"; 
            }
        break;
        case "center":
            for (let x of inputContainer) {
                x.style.textAlign = "center"; 
            }
        break;
        case "right": 
            for (let x of inputContainer) {
                x.style.textAlign = "right"; 
            }
        break;
    }
    
}