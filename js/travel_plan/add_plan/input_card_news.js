document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.querySelector('.hashtag');

    input.addEventListener('input', () => {
        if (!input.value.startsWith('#')) {
            input.value = '#' + input.value.replace(/^#+/, '');
        } else if (input.value === '#') {
            input.setSelectionRange(1, 1);
        }
    });

    input.addEventListener('keydown', (event) => {
        if (input.selectionStart === 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
            event.preventDefault();
        }
    });

    input.addEventListener('focus', () => {
        if (input.value === '#') {
            input.setSelectionRange(1, 1);
        }
    });

    const yenInput = document.getElementById('yen-input');
    const yenTxt = document.getElementById('yen-txt');
    yenInput.addEventListener('input', () => {
        if(yenInput.value.length > 0) {
            yenTxt.style.display = 'block';
        } else {
            yenTxt.style.display = 'none';
        }
    })
    
});