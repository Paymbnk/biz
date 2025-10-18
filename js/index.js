const pricePerTicket = 8;
const countEl = document.getElementById('ticketCount');
const totalPriceEl = document.getElementById('totalPrice');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const monoPayBtn = document.getElementById('monoPay');

let count = 1;

function updateDisplay() {
  totalPriceEl.textContent = `${count * pricePerTicket} ₴`;
  countEl.textContent = count;
}

plusBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

minusBtn.addEventListener('click', () => {
  if (count > 1) {
    count--;
    updateDisplay();
  }
});

monoPayBtn.addEventListener('click', () => {
  // сохраняем количество билетов
  localStorage.setItem('tickets', count);
  // переход на другую страницу
  window.location.href = 'biletiki.html';
});
