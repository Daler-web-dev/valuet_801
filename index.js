let buttons = document.querySelectorAll('nav a')
let contents = document.querySelectorAll('.content')


buttons.forEach(btn => {
    btn.onclick = () => {
        contents.forEach(page => {
            if(page.id === btn.getAttribute('data-p')) {
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
      label: '',
      backgroundColor: ['#fff', '#018FFF', '#FAD679'],
      borderColor: 'transparent',
      data: [18, 54, 28],
      borderWidth: 10,
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



const data2 = {
  labels: ["June", "July", "August", "September", "October"],
  datasets: [{
    label: "",
    data: [4000,8000,6000,10000,8000,6000,2000,12000,14000,15000,16000,17000],
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

for(let i = 0; i < 7; i++){
    let box = document.createElement('div')
    box.classList.add('box')

    box.src = "./public/icons/trans.png"

    transes.append(box)
}