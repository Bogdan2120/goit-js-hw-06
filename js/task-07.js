const ref = {
  inputRenge: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

const onResizeText = e =>
  (ref.text.style.fontSize = `${e.currentTarget.value}px`);

ref.inputRenge.addEventListener('input', onResizeText);
