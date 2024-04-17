function getName() {
    const userid = localStorage.getItem("userid");
    const usernick = document.getElementsByClassName('user-nick');
  
    axios
    .post("http://15.152.40.225:3000/user/getName", { userid})
    .then((response) => {
        const name = response.data.name;

        for (let i in usernick) {
            usernick[i].innerHTML = name;
        }
    })
    .catch((e) => {
        console.log(e);
    });
}

getName();

function getProfileImage() {
    const userid = localStorage.getItem("userid");
    const profileImage = document.getElementById('profile-image');
  
    axios
      .post("http://15.152.40.225:3000/user/getUrl", {
        userid: userid
      })
      .then((response) => {
        const imageUrl = response.data.imageUrl;
  
        profileImage.src = `http://15.152.40.225:3000${imageUrl}`;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  getProfileImage();
  