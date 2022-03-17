/*Providied searchFilter Plug In  */
// const search = new Filter('search', 'data-caption');

baguetteBox.run('.gridContainer');

// (1) Get Input Element 
let inputLog = document.getElementById("search");
// (2) Add Event Listener (KeyUp)
inputLog.addEventListener('keyup', filterNames);


function filterNames() {
// (3)Get Value of Input
filterValue = document.getElementById("search").value.toLowerCase()
};
//Get Captions
const anchors = document.querySelectorAll('a');


for (let i = 0; i < anchors.length; i++){
let captions = anchors[i].getAttribute("data-caption").toLowerCase();
let filter =  captions.includes(filterValue);
}

if (filter === true) {
    display: "block";
} else {display: "none";
};