// 확인 버튼 활성화
function chkBtnAble() {
    let chk = document.getElementsByClassName('genre-img');
    let chkBtn = document.getElementsByClassName('next-btn')[0];

    for (let i = 0; i < 9; i++) {
        if (chk[i].src.includes('un_selected')) {
            chkBtn.setAttribute("disabled", "disabled");
            chkBtn.classList.add('disabled');
        } else {
            chkBtn.removeAttribute("disabled");
            chkBtn.classList.remove('disabled');
            break;
        }
    }
}

// 모달 창 띄우기
function modal() {
    var zIndex = 9999;
    var modal = document.getElementsByClassName('modal-container')[0];

    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.2)'
    });
    document.body.append(bg);

    modal.querySelector('.goto-signIn').addEventListener('click', function() {
        bg.remove();
        modal.style.display = 'none';
    });

    modal.setStyle({
        position: 'fixed',
        display: 'block',
        zIndex: zIndex + 1,

        top: '50%',
        left: 'calc(50%)',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}
Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};

let selectedGenres = [];

function selectedCheck(selectedGenre){
    const selectedGenreId = selectedGenre.id;

    const index = selectedGenres.indexOf(selectedGenreId);

    if (index === -1) {
        selectedGenres.push(selectedGenreId);
    } else {
        selectedGenres.splice(index, 1);
    }
}

function submit(){
    const email = localStorage.getItem('email');

    axios
    .post("http://13.208.214.110:3000/user/signup7", { 
        email: email,
        genres: selectedGenres
      })
      .then((response) => {
        console.log("Registration response:", response.data);
        if (response.data.message === "User registered successfully") {
            location.href='./input_profile.html'
        }
      })
      .catch((e) => {
        console.error("Error during registration:", e);
        alert("에러가 발생했습니다.")
      });

    console.log("Selected Genre IDs:", selectedGenres);
}
