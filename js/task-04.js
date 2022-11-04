const ref = {
  decrenent: document.querySelector('[data-action="decrement"]'),
  increnent: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;
ref.value.textContent = counterValue;

const onDecrementNumberClick = () => {
  const value = (counterValue -= 1);
  ref.value.textContent = value;
};

const onIncrementNumberClick = () => {
  const value = (counterValue += 1);
  ref.value.textContent = value;
};

ref.decrenent.addEventListener('click', onDecrementNumberClick);
ref.increnent.addEventListener('click', onIncrementNumberClick);
