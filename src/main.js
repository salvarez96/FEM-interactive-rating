const ratingButton = document.querySelectorAll('.rating__button');
const ratingContainer = document.querySelector('.rating');

let ratingValue = 0;

ratingButton.forEach(item => {
  item.addEventListener('click', () => {
    ratingButton.forEach(item2 => item2.className = 'rating__button');
    ratingValue = item.innerHTML;
    item.className = 'rating__button rating__button--selected';
    console.log(ratingValue);
    console.log(item.className);
  })
});