class Planet {
	constructor(element) {
		this.x = 0;
		this.deg = 0;
		this.degOffset = 0;
		this.amp = 400;
		this.size = 20;

		// DOM
		this.el = element;
	}

	set() {
		const randomNum = Math.random() * 10;
		this.degOffset = Math.floor(randomNum); // 0~9
	}

	calc() {
		this.deg += this.degOffset;
		let radian = (Math.PI / 180) * this.deg;

		if (this.deg >= 360) {
			this.deg = 0;
		}
		this.x = this.amp * Math.sin(radian);
	}
	update() {
		this.el.style.transform = `translate(-50%, -50%) translateX(${this.x}px)`;
	}
}

function createDOM() {
	const CANVAS = document.querySelector(".canvas");
	const orbit = document.createElement("div");
	const planet = document.createElement("div");
	orbit.classList.add("orbit");
	planet.classList.add("planet");
	CANVAS.append(orbit);
	orbit.append(planet);

	return planet;
}

let count = 5;
let planets = [];

for (let i = 0; i < count; i++) {
	let planetElement = createDOM();
	planets.push(new Planet(planetElement));
}

planets.forEach((p) => {
	p.set();
	console.log(p.degOffset);
});

function tick() {
	// planets.forEach((p) => {
	// 	p.calc();
	// 	p.update();
	// });

	window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);
