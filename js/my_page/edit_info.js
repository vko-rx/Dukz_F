const hiddenDiv = document.getElementsByClassName('hidden')[0];
const editBtn = document.getElementsByClassName('edit-btn')[0];
const inputTxt = document.getElementsByClassName('input-txt')[0];
const chkTxtDiv = document.getElementsByClassName('chk-txt')[0];

const editChkTxt = document.getElementsByClassName('edit-chk-txt')[0];
const editComplite = document.getElementsByClassName('edit-complite')[0];


function chktoCanEdit() {
    if (hiddenDiv.classList.contains('hidden')) {
        removeHidden(hiddenDiv);
        addDisabled(editBtn);
    } else {
        removeHidden(editComplite);
    }
}


function removeHidden(obj) {
    obj.classList.remove('hidden');
}

function removeDisabled(obj) {
    obj.removeAttribute("disabled");
    obj.classList.remove('disabled');
}
function addDisabled(obj) {
    obj.setAttribute("disabled", "disabled");
    obj.classList.add('disabled');
}