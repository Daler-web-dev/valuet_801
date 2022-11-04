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