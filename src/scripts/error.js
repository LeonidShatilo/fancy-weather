const ERROR = document.querySelector('.error');
export const ERROR_MESSAGE = document.querySelector('.error__message');
const ERROR_CONFIRM_BUTTON = document.querySelector('.error__confirm-button');

export function showError(descriprion) {
  ERROR_MESSAGE.innerHTML = descriprion;
  ERROR.classList.add('error__visible');
}

function hideError() {
  ERROR.classList.add('error__hide');
  setTimeout(() => {
    ERROR.classList.remove('error__visible');
  }, 400);
  setTimeout(() => {
    ERROR.classList.remove('error__hide');
  }, 500);
}

ERROR_CONFIRM_BUTTON.addEventListener('click', hideError);
