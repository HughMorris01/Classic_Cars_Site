// Menu and Navbar
document.querySelector('.menu').addEventListener('click', ()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change');
    })
})

document.querySelectorAll('section').forEach((item)=>{
    item.addEventListener('click', ()=>{
        document.querySelectorAll('.target').forEach((item)=>{
            item.classList.remove('change');
        })
    })
})
// End of Menu and Navbar

// Videos
document.querySelectorAll('.video').forEach((video)=>{
    video.addEventListener('mouseover', ()=>{
        video.play();
    })
    video.addEventListener('mouseout', ()=>{
        video.pause();
    })
})
// End of Videos