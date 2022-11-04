const ref = {
  nameInput: document.querySelector('input#name-input'),
  nameOutput: document.querySelector('span#name-output'),
};

const onInputName = e => {
  ref.nameOutput.textContent = e.currentTarget.value;

  if (e.currentTarget.value === '') {
    ref.nameOutput.textContent = 'Anonymous';
  }
};

ref.nameInput.addEventListener('input', onInputName);
