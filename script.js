const grid = document.querySelector(`.grid`);

function generateGrid (size) {
	if (size > 100) {
		alert(`max grid size is 100. please input a new size.`);
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

		div.addEventListener(`mouseenter`, () => div.classList.add(`hovered`));

		grid.appendChild(div);
	}
}

const input = document.querySelector(`input`);
const btn = document.querySelector(`button`);

btn.addEventListener(`click`, () => generateGrid(input.value));