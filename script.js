const grid = document.querySelector(`.grid`);

for (let i = 0; i < 256; i++) {
	const div = document.createElement(`div`);
	div.classList.add(`block`);
	div.addEventListener(`mouseenter`, () => div.classList.add(`hovered`));
	grid.appendChild(div);
}