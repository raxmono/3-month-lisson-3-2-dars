let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
}); 



const menyubtn=document.querySelector('.btn')
menyubtn.addEventListener('click',
function(){
    document.body.classList.toggle('menu-closed')
})