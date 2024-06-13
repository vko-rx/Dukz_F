document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.querySelector('.hashtag, #yen-input');

    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.position = 'absolute';
    hiddenDiv.style.visibility = 'hidden';
    hiddenDiv.style.whiteSpace = 'pre';
    hiddenDiv.style.fontSize = getComputedStyle(input).fontSize;
    hiddenDiv.style.fontFamily = getComputedStyle(input).fontFamily;
    hiddenDiv.style.padding = getComputedStyle(input).padding;
    hiddenDiv.style.border = getComputedStyle(input).border;
    document.body.appendChild(hiddenDiv);

    input.addEventListener('input', () => {
        hiddenDiv.textContent = input.value || input.placeholder;
        input.style.width = hiddenDiv.offsetWidth + 'px';
    });

    // 초기 너비 설정
    hiddenDiv.textContent = input.value || input.placeholder;
    input.style.width = hiddenDiv.offsetWidth + 'px';
});