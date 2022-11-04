const ref = {
  decrenent: document.querySelector('[data-action="decrement"]'),
  increnent: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;
ref.value.textContent = counterValue;

const onDecrementNumberClick = () => {
  const valueNum = (counterValue -= 1);
  ref.value.textContent = valueNum;
};

const onIncrementNumberClick = () => {
  const valueNum = (counterValue += 1);
  ref.value.textContent = valueNum;
};

ref.decrenent.addEventListener('click', onDecrementNumberClick);
ref.increnent.addEventListener('click', onIncrementNumberClick);
