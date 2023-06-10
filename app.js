const subs = document.querySelectorAll(".btn"),
    socialMedia = document.querySelectorAll(".logo"),
    like = document.querySelector(".bx-heart");

subs[0].addEventListener('click', () => {
    if(subs[0].innerText = 'Subscribe')
        subs[0].innerText = 'Subscribed';
    else
        subs[0].innerText = 'Subscribe'
})

subs[1].addEventListener('click', () => {
    window.open("https://www.instagram.com/direct/t/112527886963063/")
})

socialMedia[0].addEventListener('click', () => {
    window.open("https://www.facebook.com/profile.php?id=100087205885778");
})

socialMedia[2].addEventListener('click', () => {
    window.open("https://www.instagram.com/is__rajput/");
})

like.addEventListener('click', () => {
    if (like.classList.contains("bx-heart")) {
        console.log('helo')
        like.classList.replace("bx-heart", "bxs-heart")
        like.style.color = 'red'
    } else {
        like.classList.replace("bxs-heart", "bx-heart")
        like.style.color = 'rgba(0, 0, 0, .5)'
    }
})
