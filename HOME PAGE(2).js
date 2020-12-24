const toggleButton = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('nav-doi')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})