let buttons = document.querySelectorAll('nav a')
let contents = document.querySelectorAll('.content')


buttons.forEach(btn => {
	btn.onclick = () => {
		contents.forEach(page => {
			if (page.id === btn.getAttribute('data-p')) {
				contents.forEach(el => el.classList.remove('activePage'))
				page.classList.add('activePage')
			}
		})
	}
})

const labels = [
	'Ethereum',
	'Bitcoin',
	'Dash'
];

const data = {
	labels: labels,
	datasets: [{
		label: ' ',

		backgroundColor: ['#fff', '#018FFF', '#FAD679'],
		borderColor: 'transparent',
		data: [18, 54, 28],
		borderWidth: 10,
	}],
};

const config = {
	type: 'doughnut',
	data: data,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: 'Chart.js Pie Chart'
			}
		}
	},
};

const myChart = new Chart(
	document.getElementById('myChart'),
	config
);



const data2 = {
	labels: ["June", "July", "August", "September", "October"],
	datasets: [{
		label: "",
		data: [4000, 8000, 6000, 10000, 8000, 6000, 2000, 12000, 14000, 15000, 16000, 17000],
		fill: true,
		borderColor: '#0292E2',
		tension: 0.5
	}]
};

const configg = {
	type: 'line',
	data: data2,
};

const lineChart = new Chart(
	document.getElementById('lineChart'),
	configg
);


let transes = document.querySelector('.fortranses')

for (let i = 0; i < 10; i++) {
	let box = document.createElement('div')
	let box_l = document.createElement('div')
	let time = document.createElement('p')
	let img = document.createElement('img')
	let person = document.createElement('p')
	let amount = document.createElement('p')
	box.classList.add('box')
	box_l.classList.add('box_l')
	time.classList.add('time')
	img.classList.add('img')
	person.classList.add('person')
	amount.classList.add('amount')

	time.innerHTML = "AM 01:16"
	person.innerHTML = "From Elon Musk"
	amount.innerHTML = "+ 4,800"


	img.src = "./public/icons/up.png"
	box.src = "./public/icons/trans.png"

	box_l.append(time, img, person)
	box.append(box_l, amount)
	transes.append(box)
}