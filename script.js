let menu=document.querySelector(".berger-menu");
function toggleMenu() {
  if(document.querySelector('input[type="checkbox"]:checked')){
    
    menu.style.display="block";
  }
  else{
    menu.style.display="none";
   
  }
};