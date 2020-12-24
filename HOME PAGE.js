const navSLide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-doi')
    const navLinks= document.querySelectorAll('.nav-doi li');
    //toggle nav

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
  
        //animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            } else{  link.style.animation = 'navLinksFade 0.5s ease forwards ${index / 7 + 0.3'    
          }
              
          });
    });


}

vSLide();