const grid = document.querySelector(`.grid`);

function generateColor(square) {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	console.log(square);

	square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function generateGrid (size) {
	size = +size;

	if (size > 100 || size <= 0 || !Number.isInteger(size)) {
		alert(`grid size must be a positive integer less than 100. try again.`);
		return;
	}

	const previousGrid = document.querySelectorAll(`.block`);
	previousGrid.forEach((element) => grid.removeChild(element));

	for (let i = 0; i < (size*size); i++) {
		const div = document.createElement(`div`);

		const blockDimension = (1 / size) * 100;
		div.style.height = `${blockDimension}%`;
		div.style.width = `${blockDimension}%`;

		div.classList.add(`block`);

		div.addEventListener(`mouseenter`, () => generateColor(div));

		grid.appendChild(div);
	}
}

const input = document.querySelector(`input`);
const btn = document.querySelector(`button`);

input.addEventListener(`keypress`, (e) => {
	if(e.key === `Enter`) generateGrid(input.value);
});
btn.addEventListener(`click`, () => generateGrid(input.value));