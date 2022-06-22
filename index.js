const closeBtn = document.querySelector('.close');
const btnOrange = document.querySelector('.btn-orange');
const btnGreen = document.querySelector('.btn-green');
const telephoneCall = document.querySelector('.telephone-call');
const modalContainer = document.querySelector('.modal-container');
/*Open Modal*/
telephoneCall.addEventListener('click', () => {
  modalContainer.classList.add('open-modal')
})

btnOrange.addEventListener('click', () => {
  modalContainer.classList.add('open-modal')
})

btnGreen.addEventListener('click', () => {
  modalContainer.classList.add('open-modal')
})

/*Close modal*/
closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('open-modal')
})

/*Mask*/
const telephoneInput = document.querySelector('#telephone');

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const mask = IMask(telephoneInput, maskOptions);

/* Error Modal */
const errorModal = document.querySelector('.error-modal');
const errorText = document.querySelector('.error-text');

function errorMessage(text, err) {
  if(err === 'Error') {
    errorText.style.color = 'red';
  } else if (err === 'Success') {
    errorText.style.color = 'green';
  }
  errorText.textContent = text;
  errorModal.classList.add('open-modal');
  setTimeout(() => {
    errorModal.classList.remove('open-modal')
  }, 5000)
}

/*Submit Call*/
const btnSubmit = document.querySelector('.submit-call');
const checkbox = document.querySelector('#politics');

btnSubmit.addEventListener('click', () => {
  if(telephoneInput.value.length !== 16) {
    errorMessage('Неверно указан номер!', 'Error')
  } else if (checkbox.checked === false) {
    errorMessage('Согласитесь c условиями \'Политики конфиденциальности\'!', 'Error')
  } else {
    errorMessage('Мы перезвоним Вам в течении 10 минут!', 'Success')
    modalContainer.classList.remove('open-modal')
    checkbox.checked = false;
    telephoneInput.value = '';
  }
})