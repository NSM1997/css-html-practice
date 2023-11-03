let stars= document.querySelector('.stars');
let ratingCount = document.querySelector('#count');

let allStars = document.querySelectorAll('.fa-solid.fa-star')

stars.addEventListener('click',event=>{
    let clickedStar = event.target.dataset.index;

    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove('active');
    }
    for(let i=0;i<clickedStar;i++){
        allStars[i].classList.add('active');
    }
    ratingCount.innerText=clickedStar;
})

