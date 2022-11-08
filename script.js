const input =document.querySelector("#guess");
const button=document.querySelector("#btn");
const answer=Math.floor(Math.random ()*20)+1;

input.addEventListener("keypress",function(e){
    if(e.keyCode===13){
        play();
    }
}
)

button.addEventListener("click",play);

function play(){
    const userNumber=document.querySelector("#guess").value;
    if(userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ops!',
            text: 'Please enter the number from 1 to 20!',
          }) 
    }
    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Ops!',
            text: 'Please enter a number!',
          })  
    }
    else{
        if(userNumber<answer){
            Swal.fire('Please try a larger number! Computer still wins!')  
        }
        else if (userNumber>answer) {
            Swal.fire('Please try a smaller number! Computer still wins!') 
        }
        else {
            Swal.fire({
                title: 'You have won!',
                imageUrl: 'victory.jpg',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Victory',
              }) 
        }
    }
}


//Animations

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

