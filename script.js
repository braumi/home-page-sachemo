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
    brands.scrollLeft = (value-2700)*.5;
  }

}
)


let item_scroll = document.querySelector('.main-body1 .container');
let scroller = document.querySelector('.scroller');
item_scroll.scrollLeft = 10000;
let max_value = item_scroll.scrollLeft;
console.log(max_value);
item_scroll.scrollLeft = 0;


item_scroll.addEventListener('scroll', function(){
  const width = Math.max( document.querySelector('.main-body1 .container').scrollLeft);
  let value = item_scroll.scrollLeft;
  console.log(width);
  console.log(value);
  scroller.style.width =  4 + 56*value/max_value + 'px';
})