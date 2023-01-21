// Search input
const searchInput = document.getElementById("search-input");
const clearInput = document.querySelector(".clear-input");

searchInput.addEventListener("input", function(){
  if(searchInput.value !== ""){
    clearInput.classList.remove("hidden")
  } else {
    clearInput.classList.add("hidden");
  }
})

clearInput.addEventListener("click", function(e){
  searchInput.value = "";
  this.classList.add("hidden");
})