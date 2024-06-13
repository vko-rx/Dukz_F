document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.querySelector('.hashtag');

    input.addEventListener('input', () => {
        // # 문자가 없으면 추가
        if (!input.value.startsWith('#')) {
            input.value = '#' + input.value.replace(/^#+/, '');
        } else if (input.value === '#') {
            input.setSelectionRange(1, 1);
        }
    });

    input.addEventListener('keydown', (event) => {
        // # 문자를 지우려고 할 때 동작 방지
        if (input.selectionStart === 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
            event.preventDefault();
        }
    });

    input.addEventListener('focus', () => {
        // 포커스 시 커서를 항상 # 뒤에 위치시킴
        if (input.value === '#') {
            input.setSelectionRange(1, 1);
        }
    });
});