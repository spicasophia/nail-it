// Get all the client reviews
const clientReviews = document.querySelectorAll('.client-review');

// Initialize the current review index
let currentReviewIndex = 0;

// Function to show the current review
function showCurrentReview() {
  // Hide all reviews
  clientReviews.forEach(review => {
    review.style.display = 'none';
  });

  // Show the current review
  clientReviews[currentReviewIndex].style.display = 'block';
}

// Function to show the next review
function showNextReview() {
  currentReviewIndex++;
  if (currentReviewIndex >= clientReviews.length) {
    currentReviewIndex = clientReviews.length++;
  }
  console.log('hi')

  showCurrentReview();
}

// Function to show the previous review
function showPreviousReview() {
  currentReviewIndex--;
  if (currentReviewIndex < 0) {
    currentReviewIndex = clientReviews.length--;
  }
  console.log('hi')
  showCurrentReview();
}

// Add event listeners to the next and previous buttons
const nextButton = document.querySelector('.review-btn button:nth-child(2)');
const previousButton = document.querySelector('.review-btn button:nth-child(1)');

nextButton.addEventListener('click', showNextReview);
previousButton.addEventListener('click', showPreviousReview);

// Show the initial review
showCurrentReview();

