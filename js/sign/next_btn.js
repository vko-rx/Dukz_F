let nextBtn = document.getElementsByClassName('next-btn')[0];

function chkToNext(obj) {
    if (obj.value.length > 0) {
        nextBtn.removeAttribute("disabled");
        nextBtn.classList.remove('disabled')
    } else {
        nextBtn.setAttribute("disabled", "disabled");
        nextBtn.classList.add('disabled');
    }
}

function submit(){
    const email = localStorage.getItem('email');
    var name = document.getElementById("input-nick").value;

    axios
    .post("http://13.208.214.110:3000/user/signup4", { 
        email: email,
        name: name,
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
}