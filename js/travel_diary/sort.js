const modalContainer = document.getElementsByClassName('modal-container')[0];
function modalVisible() {
    if (modalContainer.style.visibility == 'visible') {
        modalContainer.style.visibility = 'hidden';
    } else {
        modalContainer.style.visibility = 'visible';
    }
}

function getAllDiaries() {

    axios.post("http://54.180.238.52:3000/user/getAllDiaries", {
        
    })
    .then((response) => {
        console.log('Successfully fetched diaries:', response.data.diaries);
    })
    .catch((error) => {
        console.error('Error fetching diaries:', error);
    });
}

getAllDiaries();
