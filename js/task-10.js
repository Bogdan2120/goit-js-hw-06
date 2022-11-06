const ref = {
  inputEl: document.querySelector('#controls input'),
  createEl: document.querySelector('#controls button[data-create]'),
  destroyEl: document.querySelector('#controls button[data-destroy]'),
  divEl: document.querySelector('#boxes'),
};
console.log(ref.inputEl, ref.createEl, ref.destroyEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  let createDiv = '';
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      createDiv += `<div style="width:${width}px; height:${height}px; background-color: ${getRandomHexColor()}" ></div>`;
      continue;
    }

    createDiv += `<div style="width:${(width += 10)}px; height:${(height += 10)}px; background-color: ${getRandomHexColor()}" ></div>`;
  }

  ref.divEl.insertAdjacentHTML('beforeend', createDiv);
};

const destroyBoxes = () => {
  ref.divEl.innerHTML = '';
};

const onCreateClick = e => {
  const valueInput = ref.inputEl.value;
  createBoxes(valueInput);
};

const onDestroyClick = e => {
  destroyBoxes();
};

ref.createEl.addEventListener('click', onCreateClick);
ref.destroyEl.addEventListener('click', onDestroyClick);
