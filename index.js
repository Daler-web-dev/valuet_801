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

// mustafa and shaxzod


const data3 = {
	labels: ["NOV 15", "NOV 16", "NOV 17", "NOV 18", "NOV 19", "NOV 20", 'NOV 21', "NOV 22"],
	datasets: [{
		label: "",
		data: [0, 4000, 2000, 8000, 6000, 10000, 6000, 8000, 2000, 10000],
		fill: true,
		borderColor: '#0292E2',
		tension: 0.5
	}]
};

const config3 = {
	type: 'line',
	data: data3,
};

const lineChart3 = new Chart(
	document.getElementById('lineChart3'),
	config3
);


const SecondLabels = [
	'2',
	'4',
	'6',
	'8',
	'10',
	'12',
	'14',
];

const SecondData = {
	labels: SecondLabels,
	datasets: [{
		label: 'My First dataset',
		backgroundColor: [ '#018FFF'],
		borderColor: [ '#018FFF'],
		weight: 0.1,
		borderColor: '#0292E2',
		tension: 0.5,
		data: [14, 10, 16, 13, 15, 14, 15, 20],
	}]
};

const SecondConfig = {
	type: 'line',
	data: SecondData,
	options: {}
};


const mySecondChart = new Chart(
	document.getElementById('mySecondChart'),
	SecondConfig
);

const ThirdLabels = [
    'Ethereum',
    'Bitcoin',
    'Dash',
];

const ThirdData = {
    labels: ThirdLabels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['#FFFFFF', '#018FFF', '#FAD679'],
        borderColor: ['#FFFFFF', '#018FFF', '#FAD679'],
        weight: 0.1,
        data: [18, 64, 18],
    }]
};
        
const ThirdConfig = {
    type: 'doughnut',
    data: ThirdData,
    options: {}
};


const myThirdChart = new Chart(
    document.getElementById('myThirdChart'),
    ThirdConfig
);

function createChart(canvas, chartType, labels) {
	const data = {
		labels: labels,
		datasets: [{
			label: 'My First dataset',
			backgroundColor: ['#FFFFFF', '#018FFF', '#FAD679'],
			borderColor: ['#FFFFFF', '#018FFF', '#FAD679'],
			weight: 0.1,
			data: [18, 64, 18],
		}]
	};
			
	const config = {
		type: chartType,
		data: data,
		options: {}
	};


	const chart = new Chart(
		document.getElementById(canvas),
		config
	);
}

createChart('myChartOne', 'doughnut', ['Ethereum','Bitcoin','Dash'])