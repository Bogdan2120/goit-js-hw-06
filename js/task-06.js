const inputEl = document.querySelector('#validation-input');

const onInputBlur = e => {
  const dataValue = Number(inputEl.dataset.length);

  if (e.currentTarget.value.length === dataValue) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    return;
  }

  inputEl.classList.remove('valid');
  inputEl.classList.add('invalid');
};

inputEl.addEventListener('blur', onInputBlur);
