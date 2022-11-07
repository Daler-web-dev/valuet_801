const data = [
    {
        img: 'Group 5.1.svg',
        txt: 'DASH',
        img_2: 'Vector.svg',
    },
    {
        img: 'Group 5.1.svg',
        txt: 'Aeternity',
        img_2: 'Vector.svg',
    },
    {
        img: 'Group 5.1.svg',
        txt: 'Ethereum',
        img_2: 'Vector.svg',
    },
    {
        img: 'Group 5.1.svg',
        txt: 'PeerCoin',
        img_2: 'Vector.svg',
    },
    {
        img: 'Group 5.1.svg',
        txt: 'BitCoin',
        img_2: 'Vector.svg',
    },
    {
        img: 'Group 5.1.svg',
        txt: 'GridCoin',
        img_2: 'Vector.svg',
    },
    {
        img: 'Group 5.1.svg',
        txt: 'NavCoin',
        img_2: 'Vector.svg',
    },
    {
        img: 'Group 5.1.svg',
        txt: 'LiteCoin',
        img_2: 'Vector.svg',
    },
    {
        img: 'Group 5.1.svg',
        txt: 'Nano',
        img_2: 'Vector.svg',
    }
]

let main = document.querySelector('#Market')

for ( let item of data) {
    let box = document.createElement('div')
    let box_top = document.createElement('div')
    let box_in = document.createElement('div')
    let box_in_left = document.createElement('div')
    let box_in_left_1 = document.createElement('div')
    let box_in_left_2 = document.createElement('div')
    let box_in_right = document.createElement('div')
    let box_in_right_1 = document.createElement('div')
    let box_in_right_2 = document.createElement('div')
    let box_in_right_3 = document.createElement('div')
    let img = document.createElement('img')
    let txt_1 = document.createElement('p')
    let txt_2 = document.createElement('p')
    let txt_3 = document.createElement('p')
    let txt_4 = document.createElement('p')
    let txt_5 = document.createElement('p')
    let txt_6 = document.createElement('p')
    let txt_7 = document.createElement('p')
    let txt_8 = document.createElement('p')
    let txt_9 = document.createElement('p')
    let txt_10 = document.createElement('p')
    let img_2 = document.createElement('img')

    box.classList.add('maratBox')
    box_top.classList.add('box_top')
    box_in.classList.add('box_in')
    box_in_left.classList.add('box_in_left')
    box_in_left_1.classList.add('box_in_left_1')
    box_in_left_2.classList.add('box_in_left_2')
    box_in_right.classList.add('box_in_right')
    box_in_right_1.classList.add('box_in_right_1')
    box_in_right_2.classList.add('box_in_right_2')
    box_in_right_3.classList.add('box_in_right_3')
    img.src = `./public/images/${item.img}`
    img.classList.add('img')

    img_2.src = `./public/images/${item.img_2}`
    img_2.classList.add('img_2')

    txt_1.innerHTML = `${item.txt}`
    txt_1.classList.add('txt_1')

    txt_2.innerHTML = '1.93%'
    txt_2.classList.add('txt_2')

    txt_3.innerHTML = 'EUR'
    txt_3.classList.add('txt_3')

    txt_4.innerHTML = 'USD'
    txt_4.classList.add('txt_4')

    txt_5.innerHTML = 'USD'
    txt_5.classList.add('txt_5')

    txt_6.innerHTML = '1,307.96'
    txt_6.classList.add('txt_6')

    txt_7.innerHTML = 'EUR'
    txt_7.classList.add('txt_7')

    txt_8.innerHTML = 'Volume'
    txt_8.classList.add('txt_8')

    txt_9.innerHTML = '18,423'
    txt_9.classList.add('txt_9')

    txt_10.innerHTML = 'DASH'
    txt_10.classList.add('txt_10')

    main.append(box)
    box.append(box_top, img_2)
    box_top.append(box_in_left, box_in_right,)
    box_in_left.append(box_in_left_1, box_in_left_2)
    box_in_left_1.append(img)
    box_in_left_2.append(txt_1, txt_2)
    box_in_right.append(box_in_right_1, box_in_right_2, box_in_right_3)
    box_in_right_1.append(txt_3, txt_4, txt_5)
    box_in_right_2.append(txt_6, txt_7)
    box_in_right_3.append(txt_8, txt_9, txt_10)
}
