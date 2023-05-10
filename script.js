const favorited = document.querySelectorAll(".fav .favorites");
const added = document.querySelectorAll(".fav .add-to-cart");
let i = 0;

favorited.forEach((svg) => {
  svg.addEventListener("click", () => {
    if(svg.classList.contains("favorited")==false){
      svg.classList.remove("favorites");
      svg.classList.add("favorited");
      i--;
      console.log(i);
    }
    else{
      svg.classList.add("favorites");
      svg.classList.remove("favorited");
      i++;
      console.log(i);
    }
  })
})
added.forEach((svg) => {
  svg.addEventListener("click", () => {
    if(svg.classList.contains("added")==false){
      svg.classList.remove("add-to-cart");
      svg.classList.add("added");
      i--;
      console.log(i);
    }
    else{
      svg.classList.add("add-to-cart");
      svg.classList.remove("added");
      i++;
      console.log(i);
    }
  })
})
