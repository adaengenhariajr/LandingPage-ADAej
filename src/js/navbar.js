const btnMobile = document.querySelector('#btn-mobile');
btnMobile.addEventListener('click', () => {
  const nav = document.querySelector('#nav-bar');
  nav.classList.toggle('active-menu');
})  
  

function handleclickMenu(btn) {
  
  const nav = document.querySelector('#nav-bar');
  nav.classList.remove('active-menu');
}