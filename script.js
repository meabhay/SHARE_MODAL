let share = document.getElementById("share");
let follow = document.getElementById("follow");
let modal = document.getElementById("modal");
let cross = document.getElementById("cross");
let wrapper = document.getElementById("wrapper");

share.addEventListener("click", () => {
   
      modal.classList.remove("scale-0");
      modal.classList.add("scale-100");
   
})
cross.addEventListener("click", () => {
  modal.classList.remove("scale-100");
  modal.classList.add( "scale-0");

})






