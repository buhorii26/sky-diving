const pesawat = document.querySelector("#pesawat");
const orangNaik = document.querySelector("#orang-naik");
const orangLompat = document.querySelector("#orang-lompat");
const canvas = document.querySelector("#canvas");
const clouds = document.querySelector("#clouds");
const totalClouds = 50;

//random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setClouds() {
  for (let i = 1; i <= totalClouds; i++) {
    //create element div
    let cloud = document.createElement("div");
    cloud.id = "cloud" + i;
    cloud.classList.add("cloud"+ random(1, 10));

    
    //create element img
    let imgCLoud = document.createElement("img");
    
    //source ke banyak file
    imgCLoud.src = `img/awan${random(1, 10)}.png`;
    
    //masukan ke dalam element clouds
    clouds.appendChild(cloud);
    
    //masukan ke dalam element div cloud
    cloud.appendChild(imgCLoud);

    //atur posisi gambar cloud
    cloud.style.left = random(-50, (-window.innerWidth * 2)) + 'px';
    cloud.style.top = random(0, window.innerHeight / 2 )  + 'px';
    cloud.style.zIndex = random(1, 10);

    
  }
}

function setBackgorund() {
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight * 2 + "px";
  canvas.style.top = -window.innerHeight + "px";
}
function animasi() {
  pesawat
    .velocity(
      {
        top: "0px",
        left: "10%",
        transform: ["rotate(10deg)", "rotate(0deg)"],
      },
      {
        duration: 7000,
      }
    )
    .velocity(
      {
        left: "10%",
        transform: ["rotate(0deg)", "rotate(10deg)"],
      },
      {
        duration: 7000,
      }
    )
    .velocity(
      {
        left: "-500px",
        top: "100px",
        transform: ["rotate(-20deg)", "rotate(0deg)"],
      },
      {
        duration: 15000,
      }
    );
  orangNaik.velocity(
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 13000,
    }
  );
  orangLompat
    .velocity(
      {
        opacity: 1,
      },
      {
        delay: 13000,
        duration: 1000,
      }
    )
    .velocity(
      {
        top: window.innerHeight + 222,
      },
      {
        queue: false,
        delay: 12000,
        duration: 12000,
      }
    );
  canvas
  .velocity(
    {
      top: "0",
    },
    {
      duration: 7000,
      queue: false,
    }
  );
  for (let i = 1; i <= totalClouds; i++){
    let duration = Math.abs(parseInt(document.getElementById('cloud' + i).style.left) / 100) * 2000;
    console.log(duration);
    document.getElementById('cloud'+i)
    .velocity({
        left:window.innerWidth,
    }, {
        duration: duration
    })
    
  }
}

setClouds();
setBackgorund();
animasi();
