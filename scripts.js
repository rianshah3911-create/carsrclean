const container = document.getElementById("cards-container");

function showCategory(type) {

document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
event.target.classList.add('active');

let content = "";

if(type === "full") {
content = `
${createCard("Small Car","KSh 3,499")}
${createCard("Midsize SUV","KSh 4,499")}
${createCard("Large SUV","KSh 5,499")}
`;
}

if(type === "exterior") {
content = `
${createCard("Small Car","KSh 1,500")}
${createCard("Midsize SUV","KSh 2,000")}
${createCard("SUV","KSh 2,500")}
`;
}

if(type === "interior") {
content = `
${createCard("Small Car","KSh 2,000")}
${createCard("Midsize","KSh 2,500")}
${createCard("Large","KSh 3,000")}
`;
}

container.innerHTML = content;
}

function createCard(title, price) {
return `
<div class="card">
<h3>${title}</h3>
<h4>${price}</h4>
<img src="" alt="Service Image Placeholder">
<ul>
<li>High pressure wash</li>
<li>Foam pre-wash</li>
<li>Wheel & tire cleaning</li>
<li>Tire shine application</li>
<li>Interior vacuum</li>
<li>Dashboard detailing</li>
<li>Window cleaning</li>
</ul>
<a class="book-btn" href="https://wa.me/254792884808?text=Hello%20I%20want%20to%20book%20${title}%20package">Book Now</a>
</div>
`;
}

showCategory("full");