//your JS code here. If required.
const metaElement = document.querySelector("#status");
const btn = document.querySelector("#enterBtn");

btn.addEventListener ('click', () => {
	metaElement.innerHTML = '<h1> Entered Metaverse </h1>'
});