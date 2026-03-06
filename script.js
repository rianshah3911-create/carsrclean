const container = document.getElementById("cards-container");
const categories = document.querySelectorAll(".category");
const indicator = document.querySelector(".slider-indicator");

const popup = document.getElementById("bookingPopup");

let selectedType="";
let selectedCarSize="";


/* LOAD SERVICE CARDS */

function loadCategory(type){

let prices={
full:["KSh 3,499","KSh 4,499","KSh 5,499"],
exterior:["KSh 1,500","KSh 2,000","KSh 2,500"],
interior:["KSh 2,000","KSh 2,500","KSh 3,000"]
};

let images={
full:["images/full_small.png","images/full_midsize.png","images/full_suv.png"],
exterior:["images/full_small.png","images/full_midsize.png","images/full_suv.png"],
interior:["images/interior_small.png","images/interior_midsize.png","images/interior_suv.png"]
};

let typeName={
full:"Full",
exterior:"Exterior Only",
interior:"Interior Only"
};

let content="";

["Small Car","Midsize Car","SUV"].forEach((title,i)=>{

content+=`

<div class="card">

<h3>${title}</h3>

<h4>${prices[type][i]}</h4>

<img src="${images[type][i]}" alt="${title}">

<ul>
<li>Premium wash</li>
<li>Interior vacuum</li>
<li>Protective finish</li>
</ul>

<button class="book-btn"
onclick="openBooking('${typeName[type]}','${title}')">
Book Now
</button>

</div>

`;

});

container.innerHTML=content;

setTimeout(()=>{

document.querySelectorAll(".card").forEach(card=>{
card.classList.add("show");
});

},100);

}


/* OPEN POPUP */

function openBooking(type,car){

selectedType=type;
selectedCarSize=car;

popup.classList.add("active");

}


/* CLOSE POPUP */

document.getElementById("closePopup").onclick=()=>{
popup.classList.remove("active");
};


/* MOBILE DATE SYSTEM */

const bookingDate = document.getElementById("bookingDate");
const bookingTime = document.getElementById("bookingTime");

function getSelectedDate(){

if(!bookingDate.value || !bookingTime.value) return null;

let dateParts = bookingDate.value.split("-");
let timeParts = bookingTime.value.split(":");

let year = parseInt(dateParts[0]);
let month = parseInt(dateParts[1]) - 1;
let day = parseInt(dateParts[2]);

let hour = parseInt(timeParts[0]);
let minute = parseInt(timeParts[1]);

return new Date(year,month,day,hour,minute);

}


/* DATE FORMATTER */

function formatDate(date){

let day = date.getDate();

let suffix="th";

if(day % 10 === 1 && day !== 11) suffix="st";
else if(day % 10 === 2 && day !== 12) suffix="nd";
else if(day % 10 === 3 && day !== 13) suffix="rd";

let months=[
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

let hours=date.getHours();
let minutes=date.getMinutes().toString().padStart(2,"0");

let ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12;

return `${day}${suffix} ${months[date.getMonth()]} ${date.getFullYear()} at ${hours}:${minutes} ${ampm}`;

}


/* CONFIRM BOOKING */

document.getElementById("confirmBooking").onclick=()=>{

let model=document.getElementById("carModel").value;

let selectedDateObject = getSelectedDate();

if(!selectedDateObject || !model){

alert("Please fill in all booking details");
return;

}

let formattedDate = formatDate(selectedDateObject);

let message=
`Hi I would like to book a ${selectedType} detail for a ${model} on ${formattedDate}.`;

let whatsapp=
`https://wa.me/254792884808?text=${encodeURIComponent(message)}`;

window.open(whatsapp,"_blank");

};


/* CATEGORY SWITCH */

categories.forEach(cat=>{

cat.addEventListener("click",()=>{

categories.forEach(c=>c.classList.remove("active"));
cat.classList.add("active");

indicator.style.left=cat.offsetLeft+"px";
indicator.style.width=cat.offsetWidth+"px";

loadCategory(cat.dataset.type);

});

});


/* DEFAULT LOAD */

window.onload=()=>{

indicator.style.left=categories[0].offsetLeft+"px";
indicator.style.width=categories[0].offsetWidth+"px";

loadCategory("full");

};


/* SCROLL REVEAL */

function revealOnScroll(){

document.querySelectorAll(".reveal").forEach(el=>{

let windowHeight=window.innerHeight;
let elementTop=el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);