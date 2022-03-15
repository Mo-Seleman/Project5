/*Providied searchFilter Plug In  */
// const search = new Filter('search', 'data-caption');

baguetteBox.run('.gridContainer');

// /* KeyUp Function Linked To Search Bar */
// const search = document.getElementById("search");
// search.addEventListener("keyup", (e) => {
// console.log(e.target.value.toLowerCase());
// });

// // Target All Anchor Elements
// const anchors = document.querySelectorAll('a');

// // Looping and Logging...
// for (let i = 0; i < anchors.length; i++) {

// }

// // getAttribute 
// const element = document.getElementById("search"); 
// let text = element.getAttribute("data-caption");

/* KeyUp Function Linked To Search Bar */
const search = document.getElementById("search");
      search.addEventListener("keyup", (e) => {
      console.log(e.target.value.toLowerCase());

const anchors = document.querySelectorAll('a'); // Target All Anchor Elements

for (let i = 0; i < anchors.length; i++) { // Looping and Logging...

const captions = anchors[i].getAttribute("data-caption"); // getAttribute 
      console.log(captions)
  }
});