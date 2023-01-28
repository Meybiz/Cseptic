// function onClick() {
// let one = document.querySelector(".lf1")
// let two = document.querySelector(".lf2")
// let three = document.querySelector(".lf3")
// let four = document.querySelector(".lf4")
// let five = document.querySelector(".lf5")

// one.style.display = (one.style.display == "none") ? "block" : "none";

// }

document.querySelector('#btn1').addEventListener("click", function () {
    document.querySelector('.lf1').classList.toggle("none")
    if (document.querySelector('.lf1').classList.contains("lf1")) {
        document.querySelector('.lf2').classList.remove("none")
        document.querySelector('.lf3').classList.remove("none")
        document.querySelector('.lf4').classList.remove("none")
        document.querySelector('.lf5').classList.remove("none")
    }
})


document.querySelector('#btn2').addEventListener("click", function () {
    document.querySelector('.lf2').classList.toggle("none")
    if (document.querySelector('.lf2').classList.contains("lf2")) {
        document.querySelector('.lf1').classList.remove("none")
        document.querySelector('.lf3').classList.remove("none")
        document.querySelector('.lf4').classList.remove("none")
        document.querySelector('.lf5').classList.remove("none")
    }
})

document.querySelector('#btn3').addEventListener("click", function () {
    document.querySelector('.lf3').classList.toggle("none")
    if (document.querySelector('.lf3').classList.contains("lf3")) {
        document.querySelector('.lf1').classList.remove("none")
        document.querySelector('.lf2').classList.remove("none")
        document.querySelector('.lf4').classList.remove("none")
        document.querySelector('.lf5').classList.remove("none")
    }
})

document.querySelector('#btn4').addEventListener("click", function () {
    document.querySelector('.lf4').classList.toggle("none")
    if (document.querySelector('.lf4').classList.contains("lf4")) {
        document.querySelector('.lf2').classList.remove("none")
        document.querySelector('.lf3').classList.remove("none")
        document.querySelector('.lf1').classList.remove("none")
        document.querySelector('.lf5').classList.remove("none")
    }
})

document.querySelector('#btn5').addEventListener("click", function () {
    document.querySelector('.lf5').classList.toggle("none")
    if (document.querySelector('.lf5').classList.contains("lf5")) {
        document.querySelector('.lf2').classList.remove("none")
        document.querySelector('.lf3').classList.remove("none")
        document.querySelector('.lf4').classList.remove("none")
        document.querySelector('.lf1').classList.remove("none")
    }
})




let clicker = [...document.querySelectorAll('.btn')];

clicker.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.btn.active').classList.remove('active');
        button.classList.add('active');
    })
})

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("actives");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

let modalButton = document.querySelector('.pulse-button');
let popup = document.querySelector('.popup');
// popup.classList.add('popup')
// popup.innerHTML = 'Окно';
popup.style.display = 'none';
document.body.appendChild(popup);
modalButton.addEventListener('click', function () {
    if (popup.style.display == 'none') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});

let closeButton = document.createElement('button');
closeButton.classList.add('closeBtn');
closeButton.innerHTML = 'Закрыть ×';
popup.appendChild(closeButton);
closeButton.addEventListener('click', function () {
    popup.style.display = 'none';

});


let modal = document.querySelector('.modal-form');
let mdBtn = document.getElementById('zakaz');
// let span = document.querySelector('.close');

mdBtn.onclick = function () {
    modal.style.display = "block";
}

// span.onclick = function() {
//     modal.style.display = "none";
// }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Спасибо за заявку! Мы перезвоним в течении 1 минуты.";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Проверьте правильность введеных Вам данных!"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)
// let one = document.querySelector('.popup')
// const timer = document.querySelector('.popup-conten');
// timer.classList.add('popup-content')
// timer.innerHTML = '25:00';
// one.appendChild(timer)

// document.body.appendChild(timer);
// let timerId = setInterval(function() {
//   let time = timer.innerHTML.split(':');
//   let minutes = time[0];
//   let seconds = checkSecond((time[1] - 1));
//   if (seconds == 59) {
//     minutes = minutes - 1
//   }
//   if (minutes < 0) {
//     clearInterval(timerId);
//     timer.innerHTML = "Buzz Buzz";
//   } else {
//     timer.innerHTML = minutes + ":" + seconds;
//   }
// }, 1000);
// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {
//     sec = "0" + sec
//   }; // add zero in front of numbers < 10
//   if (sec < 0) {
//     sec = "59"
//   };
//   return sec;
// }
                // buttons.forEach(button => {
                //   button.addEventListener('click', () => {
                //     document.querySelector('.s.active').classList.remove('active');
                //     button.classList.add('active');
                //   })
                // })
//     if (elOne.classList.contains("lf1"))  {
//         elOne.classList.remove("lf1")
//         elOne.classList.add("none")
// }

// if (elOne.classList.contains("none")){
//     elOne.classList.add("lf1")
//     elOne.classList.remove("none")
// }




