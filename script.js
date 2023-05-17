const favorited = document.querySelectorAll(".fav .favorites");
const added = document.querySelectorAll(".fav .add-to-cart");
const search = document.querySelectorAll(".search")
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

document.querySelector(".search svg").addEventListener("click", () =>{
  if(document.querySelector(".search").classList.contains("searching")==false){
    document.querySelector(".search").classList.add("searching");
  }
}
)
document.querySelector(".search button").addEventListener("click", () =>{
  if(document.querySelector(".search").classList.contains("searching")==true){
    document.querySelector(".search").classList.remove("searching");
  }
}
)

let brands = document.querySelector('.brand-list'); 

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  let value2 = brands.scrollLeft;
  if(value>2700){
    console.log(value);
    console.log(value2);
    brands.scrollLeft = (value-2700)*.5;
  }

}
)




