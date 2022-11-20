/*!
* Start Bootstrap - Business Frontpage v5.0.8 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/* Formulaire de don */
const allBtns = document.querySelectorAll('#give-form button')
const formAmount = document.querySelector('#given-amount')
const formOther = document.querySelector('#give-other')
document.querySelectorAll('#give-form button').forEach(button => {
  button.addEventListener('click', e => {
    // Remove all
    for (const btn of allBtns) {
      btn.classList.remove('btn-primary')
      btn.classList.add('btn-outline-primary')
    }

    button.classList.remove('btn-outline-primary')
    button.classList.add('btn-primary')

    formAmount.value = button.dataset.amount
    formOther.value = button.dataset.amount
  });
})