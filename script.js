const backdrop = document.getElementById('personal-message');
const openbackdrop = document.getElementById('open-personal-message');
backdrop.addEventListener('click', () => {
  backdrop.style.display = 'none';
})

openbackdrop.addEventListener('click', () => {
  backdrop.style.display = 'flex';
})