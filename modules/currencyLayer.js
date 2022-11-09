let from = document.querySelector('#from')
let to = document.querySelector('#to')
let currencySelect = document.querySelector('#select')
let currencySelectTwo = document.querySelector('.selectTwo')
let exchangeBtn = document.querySelector('.exchange')
let currencytexts = document.querySelectorAll('.currencytext')

let apiKey = "oHOwMCakYel19w2RLASK0GUjtTV8OlfO"
let baseUrl = "https://api.apilayer.com/fixer/symbols"
let data = JSON.parse(localStorage.getItem('symbols'))

if(data) {
    console.log(data);
    reloadCurr(data, currencySelect)
    reloadCurr(data, currencySelectTwo) 
} else {
    axios.get(baseUrl, {
        headers: {
            "apiKey": apiKey
        },
        redirect: 'follow'
    }).then(res => {
        localStorage.symbols = JSON.stringify(res.data.symbols)

        reloadCurr(res.data.symbols, currencySelect)
        reloadCurr(res.data.symbols, currencySelectTwo)
    })
}

function reloadCurr(object, sel) {
     for(let key in object) {
        let opt = new Option(key, key)

        sel.append(opt)
    }
}

exchangeBtn.onclick = () => {
    axios.get(`https://api.apilayer.com/fixer/convert?to=${currencySelectTwo.value}&from=${currencySelect.value}&amount=${from.value || to.value}`, {
        headers: {
            "apiKey": apiKey
        },
        redirect: 'follow'
    })
        .then(res => {
            currencytexts[0].innerHTML = `${from.value} ${currencySelect.value}`
            currencytexts[1].innerHTML = `${res.data.result} ${res.data?.query?.to}`

            to.value = res.data.result
        })
}