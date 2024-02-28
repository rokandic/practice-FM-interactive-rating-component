let form = document.getElementById('rating-form');
form.addEventListener('submit',submit);


function submit(event) {
  event.preventDefault();

  let rating = -1;
  let inputs = document.querySelectorAll(".numbers input");
  for(const i of inputs) {
    if(i.checked) {
      rating = i.value; 
    };
  }
  if(rating<0) {
    alert("Please rate before submitting.");
    return -1;
  }
  else {
    displayThankYou(rating);
  }
}


function displayThankYou(rating) {
  let ratingCard = document.getElementById('rating-card');
  let thankYouCard = document.getElementById('thank-you-card');
  let selectedText = document.getElementById('how-many-selected');

  selectedText.textContent = `You selected ${rating} out of 5`;

  ratingCard.classList.toggle('visible');
  ratingCard.classList.toggle('hidden');

  thankYouCard.classList.toggle('hidden');
  thankYouCard.classList.toggle('visible');  
}