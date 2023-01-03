// State
let view = 1;
let rating = 0;

// Selectors
let view1, view2, submitBtn;

// Functions
function switchViews(v) {
    // console.log('test')
    if (v === 1) {
        view1.style.display = 'flex'
        view2.style.display = 'none'
    }
    else {
        view2.style.display = 'flex'
        view1.style.display = 'none'
    }
}

function applyActiveEffect(e) {
    for (let i = 0; i < ratingBtns.length; i++) {
        ratingBtns[i].classList.remove('rating-btn-value--active')
    }
    e.target.classList.add('rating-btn-value--active')
}


// Events / Watchers
document.addEventListener('DOMContentLoaded', () => {
    view1 = document.querySelector('#view-1')
    view2 = document.querySelector('#view-2')
    ratingBtns = document.querySelectorAll('.rating-btn-value')
    submitBtn = document.querySelector('#submit-btn')

    for (let i = 0; i < ratingBtns.length; i++) {
        ratingBtns[i].addEventListener('click', (e) => {
            rating = e.target.dataset.rating;
            document.querySelector('#rating-value').innerHTML = 'You selected ' + rating + ' out of 5';
            applyActiveEffect(e);
        })
    }

    submitBtn.addEventListener('click', () => {
        if (rating) switchViews(2)
    })
    switchViews(1)
})

