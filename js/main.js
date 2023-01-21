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
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
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




