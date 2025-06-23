function generateCard() {
  const suits = ["♦", "♥", "♠", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  const suitClass = {
    "♦": "diamond",
    "♥": "heart",
    "♠": "spade",
    "♣": "club"
  }[suit];

  const card = document.querySelector(".card");

 
  card.className = `card ${suitClass}`;

  
  document.querySelectorAll(".suit").forEach(el => el.textContent = suit);
  document.querySelectorAll(".value").forEach(el => el.textContent = value);
}
