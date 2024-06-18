const textarea = document.querySelector('.input-content');

textarea.oninput = (event) => {
  const target = event.target;

  target.style.height = 0;
  target.style.height = target.scrollHeight + 'px';
};