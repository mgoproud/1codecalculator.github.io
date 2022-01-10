const display = document.querySelector('#display')
let buttons = Array.from(document.querySelectorAll('.square'))
let isSummed = false

let darkMode = false


display.textContent = '0'

function percentage(percent, initial) {
    return ((percent / 100) * initial)
}

buttons.map((btn) => {
    btn.addEventListener('click', (evt) => {
        const value = evt.target.textContent
        switch (value) {

            case 'C':
                display.textContent = '0'
                break;

            case '←':
                display.textContent = display.textContent.slice(0, -1)
                if (display.textContent === '') {
                    display.textContent = '0'
                }
                break;

            case '=':
                display.textContent = Number(eval(display.textContent))
                isSummed = true;
                break;

            case '%':
                const initNum = display.textContent.slice(0, display.textContent.indexOf('*'))
                const percentNum = display.textContent.slice(display.textContent.indexOf('*') + 1, display.textContent.length)
                const percentSum = percentage(percentNum, initNum)
                display.textContent = percentSum
                isSummed = true
                break;

            default:
                if (isSummed) {
                    if (!isNaN(parseInt(value))) {
                        display.textContent = value
                        isSummed = false
                    } else {
                        display.textContent += value
                        isSummed = false
                    }
                } else {
                    if (display.textContent === '0') {
                        display.textContent = value
                    } else {
                        display.textContent += value
                    }
                }
                break;
        }
    })
})


const btnLight = document.querySelector('.light')
const btnDark = document.querySelector('.dark')

const body = document.querySelector('body')
const heading = document.querySelector('h1')
const content = document.querySelector('.content-box')
const images = document.querySelectorAll('.heading-box img')


btnLight.addEventListener('click', () => {
    console.log('Light button is clicked')
    body.classList.remove('body-dark')
    heading.classList.remove('heading-dark')
    content.classList.remove('content-dark')

})

btnDark.addEventListener('click', () => {
    console.log('Dark button is clicked')
    body.classList.add('body-dark')
    heading.classList.add('heading-dark')
    content.classList.add('content-dark')
})


// const equal = document.querySelector('#equal')
// const plus = document.querySelector('#plus')
// const erase = document.querySelector('#erase')
// const bold = document.querySelector('.b')
// let total = 0
// let currentValue = ''

// calcBox.addEventListener('click', (evt) => {

//     let captured = evt.target.textContent

//     if (captured !== '=') {
//         if (display.textContent === '0') {

//             display.textContent = captured
//         } else {
//             if (total) {
//                 display.textContent = captured
//             }
//             display.textContent += captured
//         }
//     }

//     if (captured === 'C') {
//         display.textContent = '0'
//     }

//     if (typeof (parseInt(captured)) !== 'NaN') {
//         display.textContent += captured
//     }

// })

// function addition() {
//     total += parseInt(display.textContent)
//     currentValue = ''
// }

// function sum() {
//     total += parseInt(display.textContent)
//     display.textContent = total
//     console.log(typeof total)
//     display.textContent = '0'

// }

// plus.addEventListener('click', addition)
// equal.addEventListener('click', sum)



