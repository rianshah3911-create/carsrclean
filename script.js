const container = document.getElementById("cards-container");
const categories = document.querySelectorAll(".category");
const indicator = document.querySelector(".slider-indicator");

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

    let content="";

    ["Small Car","Midsize SUV","SUV"].forEach((title,i)=>{
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
            <a class="book-btn" href="https://wa.me/254792884808?text=Hello%20I%20want%20to%20book%20${type}%20${title}">Book Now</a>
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

categories.forEach((cat,index)=>{
    cat.addEventListener("click",()=>{
        categories.forEach(c=>c.classList.remove("active"));
        cat.classList.add("active");

        indicator.style.left = cat.offsetLeft + "px";
        indicator.style.width = cat.offsetWidth + "px";

        loadCategory(cat.dataset.type);
    });
});

/* DEFAULT LOAD */
window.onload = ()=>{
    indicator.style.left = categories[0].offsetLeft + "px";
    indicator.style.width = categories[0].offsetWidth + "px";
    loadCategory("full");
};

/* SCROLL REVEAL */
function revealOnScroll(){
    document.querySelectorAll(".reveal").forEach(el=>{
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);