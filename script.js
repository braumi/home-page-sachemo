// document.getElementsByClassName('arrowR')[0].onclick = function(){
//     const widthItem = document.querySelector('.top-menu-items').offsetWidth;
//     document.getElementById('head-unit').scrollLeft += widthItem*2;
//     console.log('next');
// }

const right = document.querySelector("right");
const left = document.querySelector("left");
const list = document.querySelectorAll("slide-list li");
document.getElementsByClassName("slide-list")[0].scrollLeft = 720-48;
const liItems = [...document.querySelectorAll(".slide-list li div")];
var i = 1;






var width = document.getElementsByClassName("slide-list")[0].clientWidth;
var width_list = document.getElementsByClassName("list-ad")[0].clientWidth;


document.getElementsByClassName("slide-list")[0].scrollLeft = width_list-(width-width_list-64)/2;



console.log(width_list-(width-width_list-64)/2);



function slideR() {
  i += 1;
  if (i == 5) {
    document.getElementsByClassName("slide-list")[0].scrollLeft = width_list-(width-width_list-64)/2;
    i=1;
    liItems.forEach((li) => {
      li.classList.remove("focused");
      });
    document.getElementsByClassName("list-ad")[i].classList.add("focused");
  } else {
    document.getElementsByClassName("slide-list")[0].scrollLeft += width_list-(width-width_list-64)/2;
    liItems.forEach((li) => {
        li.classList.remove("focused");
        });
        document.getElementsByClassName("list-ad")[i].classList.add("focused");
  }


}
function slideL() {
  i -= 1;
  if (i == 0) {
    document.getElementsByClassName("slide-list")[0].scrollLeft = 4258;
    liItems.forEach((li) => {
      li.classList.remove("focused");
      });
    i=4;
    liItems.forEach((li) => {
      li.classList.remove("focused");
      });
  } else {  
    document.getElementsByClassName("slide-list")[0].scrollLeft -= 1128.6;
    liItems.forEach((li) => {
        li.classList.remove("focused");
        });
        document.getElementsByClassName("list-ad")[i].classList.add("focused");
    document.getElementsByClassName("list-ad")[i].classList.add("focused");

  }

}
