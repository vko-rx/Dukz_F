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
    console.log(leftValue);
}