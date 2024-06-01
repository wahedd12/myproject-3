const wrapper2 = document.querySelector('.wrapper2');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
// const deleteLink = document.querySelector('.delete-link');

registerLink.addEventListener('click', ()=> {
wrapper2.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper2.classList.remove('active');
});

// deleteLink.addEventListener('click', ()=> {
//   wrapper.classList.remove('active');
// });

btnPopup.addEventListener('click', ()=> {
wrapper2.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
wrapper2.classList.remove('active-popup');
});
