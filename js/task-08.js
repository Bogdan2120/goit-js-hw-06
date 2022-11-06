const formEl = document.querySelector('.login-form');

const handleLoginFormSubmite = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

formEl.addEventListener('submit', handleLoginFormSubmite);
