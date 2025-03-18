
// SHOW MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')


function toggleText() {
      var moreText = document.getElementById("more-text");
      var button = document.getElementById("read-more-btn");
    
      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.innerText = "Read Less"; 
      } 
      else {
        moreText.style.display = "none";
        button.innerText = "Read More";
        
      }
    }
    
    
    

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}



navLink.forEach(n => n.addEventListener('click', linkAction))

function sendMessage() {
      var phoneNumber = "919003608946"; 
    
      var url = "https://wa.me/919003608946";
      
      window.open(url, "_blank"); 
    }

    

