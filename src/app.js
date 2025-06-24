function generateCard() {
  const suits = ['♥', '♦', '♣', '♠'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.getElementById('top-suit').textContent = randomSuit;
  document.getElementById('card-value').textContent = randomValue;
  document.getElementById('bottom-suit').textContent = randomSuit;

  const card = document.getElementById('card');
  card.className = 'card'; 
  if (randomSuit === '♥' || randomSuit === '♦') {
    card.classList.add('red');
  } else {
    card.classList.add('black');
  }
}
