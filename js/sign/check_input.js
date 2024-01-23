function checkInputs() {
    var idInput = document.getElementById("id");
    var pwInput = document.getElementById("pw");
    var signinBtn = document.getElementById("signinBtn");

    if (idInput.value.length > 0 && pwInput.value.length > 0) {
        signinBtn.removeAttribute("disabled");
        signinBtn.classList.remove('disabled');
    } else {
        signinBtn.setAttribute("disabled", "disabled");
        signinBtn.classList.add('disabled');
    }
}

function submitLogin() {
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;
  
    axios
    .post("http://localhost:3000/user/login", {
      userid: id,
      pw: pw,
    })
    .then((response) => {
      const token = response.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("userid", id);
  
      location.href='http://localhost:5500/html/home.html'
3
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {      
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  
      } else {
        alert("로그인 에러가 발생했습니다.");
  
        console.error("Error during logi?n:", error.message);
      }
    });
  
  
  }
  