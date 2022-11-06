const ref = {
  btnEl: document.querySelector('.change-color'),
  spanEl: document.querySelector('.color'),
  bodyEL: document.body,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onСhangeColorBody = e => {
  ref.bodyEL.style.backgroundColor = `${getRandomHexColor()}`;
  ref.spanEl.textContent = `${getRandomHexColor()}`;
};

ref.btnEl.addEventListener('click', onСhangeColorBody);
