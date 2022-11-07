const formEl = document.querySelector('.login-form');

const handleLoginFormSubmite = e => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log({
    email: email.value,
    password: password.value,
  });
  e.currentTarget.reset();
};

formEl.addEventListener('submit', handleLoginFormSubmite);
