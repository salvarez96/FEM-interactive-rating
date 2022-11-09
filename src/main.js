const ratingButton = document.querySelectorAll('.rating__button');
const ratingContainer = document.querySelector('.rating');
const submitButton = document.querySelector('.card__submit');
const ratingCard = document.querySelector('#ratingCard');
const main = document.querySelector('main');

let ratingValue = 0;
ratingButton.forEach(item => {
  item.addEventListener('click', () => {
    ratingButton.forEach(item2 => item2.className = 'rating__button');
    ratingValue = item.innerHTML;
    item.className = 'rating__button rating__button--selected';
  })
});

const thankYouCard = () => {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const description = document.createElement('p');
  const icon = document.createElement('i');
  const rating = document.createElement('p');

  section.classList = 'card thankYou';
  section.id = 'thankYouCard';
  rating.innerHTML = `You selected ${ratingValue} out of ${ratingContainer.childElementCount}`;
  rating.classList = 'thankYou__rating';
  title.innerHTML = 'Thank you!';
  title.classList = 'card__title';
  description.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!';
  description.classList = 'card__text';
  icon.classList = 'thankYou__icon';
  section.append(icon, rating, title, description);
  main.appendChild(section);
}
submitButton.addEventListener('click', () => {
  if(ratingValue !== 0){
    thankYouCard();
    main.removeChild(ratingCard);
  } 
})