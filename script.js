const next_btn = document.querySelector('.btn-next')
const prev_btn = document.querySelector('.btn-prev')
const images = document.querySelectorAll('.image')
const carousel = document.querySelector('.carousel')

let jump = 500
let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
    console.log(idx)
}


function changeImage() {
    if(idx > images.length - 1) {
        idx = 0
    }
    else if(idx < 0) {
        idx = images.length - 1
    }
    carousel.style.transform = `translate(-${jump*idx}px)`
}

next_btn.addEventListener('click', jumpImageNext)

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

function jumpImageNext() {
    resetInterval()
    idx++
    changeImage()
}


function jumpImagePrev() {
    resetInterval()
    idx--
    changeImage()
}


prev_btn.addEventListener('click', jumpImagePrev)