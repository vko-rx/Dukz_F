const modalContainer = document.getElementsByClassName('modal-container')[0];
function modalVisible() {
    if (modalContainer.style.visibility == 'visible') {
        modalContainer.style.visibility = 'hidden';
    } else {
        modalContainer.style.visibility = 'visible';
    }
}
