// function onClick() {
// let one = document.querySelector(".lf1")
// let two = document.querySelector(".lf2")
// let three = document.querySelector(".lf3")
// let four = document.querySelector(".lf4")
// let five = document.querySelector(".lf5")

// one.style.display = (one.style.display == "none") ? "block" : "none";

// }

document.querySelector('#btn1').addEventListener("click", function() {
document.querySelector('.lf1').classList.toggle("none")
if (document.querySelector('.lf1').classList.contains("lf1")) {
    document.querySelector('.lf2').classList.remove("none")
    document.querySelector('.lf3').classList.remove("none")
    document.querySelector('.lf4').classList.remove("none")
    document.querySelector('.lf5').classList.remove("none")
}})


document.querySelector('#btn2').addEventListener("click", function() {
    document.querySelector('.lf2').classList.toggle("none")
    if (document.querySelector('.lf2').classList.contains("lf2")) {
        document.querySelector('.lf1').classList.remove("none")
        document.querySelector('.lf3').classList.remove("none")
        document.querySelector('.lf4').classList.remove("none")
        document.querySelector('.lf5').classList.remove("none")
    }})

    document.querySelector('#btn3').addEventListener("click", function() {
        document.querySelector('.lf3').classList.toggle("none")
        if (document.querySelector('.lf3').classList.contains("lf3")) {
            document.querySelector('.lf1').classList.remove("none")
            document.querySelector('.lf2').classList.remove("none")
            document.querySelector('.lf4').classList.remove("none")
            document.querySelector('.lf5').classList.remove("none")
        }})

        document.querySelector('#btn4').addEventListener("click", function() {
            document.querySelector('.lf4').classList.toggle("none")
            if (document.querySelector('.lf4').classList.contains("lf4")) {
                document.querySelector('.lf2').classList.remove("none")
                document.querySelector('.lf3').classList.remove("none")
                document.querySelector('.lf1').classList.remove("none")
                document.querySelector('.lf5').classList.remove("none")
            }})

            document.querySelector('#btn5').addEventListener("click", function() {
                document.querySelector('.lf5').classList.toggle("none")
                if (document.querySelector('.lf5').classList.contains("lf5")) {
                    document.querySelector('.lf2').classList.remove("none")
                    document.querySelector('.lf3').classList.remove("none")
                    document.querySelector('.lf4').classList.remove("none")
                    document.querySelector('.lf1').classList.remove("none")
                }})



                
let clicker = [...document.querySelectorAll('.btn')];

        clicker.forEach(button => {
        button.addEventListener('click', () => {
        document.querySelector('.btn.active').classList.remove('active');
        button.classList.add('active');
    })
    })
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




