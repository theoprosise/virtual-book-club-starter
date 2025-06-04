document.addEventListener("DOMContentLoaded",() => {
    console.log("page loaded");
    loadReviews();
    let form = document.getElementById("review-form");
    form.addEventListener('submit', handleReviewSubmit);
    });


function loadReviews() {
    fetch("reviews.json")
    .then(response => {
    return response.json();
    })
    .then(data =>{
        const reviewParent = document.getElementById("reviews-list");
        console.log(data);
        data.forEach(element => {
            let el = createReviewElement(element);
            reviewParent.appendChild(el);

        });
    })
    .catch(error => {
    console.error('Problem', error);
    });
}


const handleReviewSubmit = (event) =>{
    console.log("handleReviewSubmit");
    event.preventDefault();

    const reviewInput = document.querySelector("#review-text");
    const reviewText = reviewInput.value;

    const reviewRate = document.getElementById("rating");
    const reviewRating = reviewRate.value;

    const reviewTitle = document.getElementById("book-title");
    const reviewTit = reviewTitle.value;
    let review = {
        reviewText,
        title: reviewTit,
        reviewRating
    };
    let revEl = createReviewElement(review);

    const revPar = document.getElementById("reviews-list");
    revPar.appendChild(revEl);

}

function createReviewElement(review){
    console.log(review);
    const reviewElement = document.createElement('div');
    reviewElement.className = "review-item";
    reviewElement.innerHTML = `
    <p class="book-title">${review.title}</p>
    `;
    return reviewElement;
    

}

function toggleLike(){
    console.log("log");
}

function repostReview(){
    console.log("reviewRepost");
}
