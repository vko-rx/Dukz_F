let yearTxt = document.getElementById('year');
let monthTxt = document.getElementById('month');
let dayTxt = document.getElementById('day');

let nextBtn = document.getElementsByClassName('next-btn')[0];

function chkToNext() {
    if (yearTxt.value.length > 0 && monthTxt.value.length > 0 && dayTxt.value.length > 0) {
        nextBtn.removeAttribute("disabled");
        nextBtn.classList.remove('disabled')
    } else {
        nextBtn.setAttribute("disabled", "disabled");
        nextBtn.classList.add('disabled');
    }
}

function submit(){
    const email = localStorage.getItem('email');
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;


    axios
    .post("http://54.180.238.52:3000/user/signup6", { 
        email: email,
        birth: year+month+day
      })
      .then((response) => {
        console.log("Registration response:", response.data);
        if (response.data.message === "User registered successfully") {
            location.href='select_genre.html';
        }
      })
      .catch((e) => {
        console.error("Error during registration:", e);
        alert("에러가 발생했습니다.")
      });
}