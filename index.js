const closeBtn = document.querySelector('.close');
const telephoneCall = document.querySelector('.telephone-call');
const modalContainer = document.querySelector('.modal-container');
/*Open Modal*/
telephoneCall.addEventListener('click', () => {
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

/* Aside */

const asideBtn = document.querySelector('.aside-btn');
const asidesContainer = document.querySelector('.aside');
const asidesAdvise = document.querySelector('.aside-advise')

asideBtn.addEventListener('click', () => {
  asidesContainer.classList.toggle('animation-bottom')
  asideBtn.classList.toggle('aside-btn__active')
  if(asidesContainer.classList.contains('animation-bottom')) {
    asidesAdvise.textContent = 'Нажмите плюсик, чтобы свернуть наши преимущества.'
  } else {
    asidesAdvise.textContent = 'Нажмите на плюсик, чтобы увидеть все преимущества работы с нами'
  }
})