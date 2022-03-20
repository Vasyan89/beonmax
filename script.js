const you = {
    age: 32,
    name: 'Vasya',
    favoriteBand: 'Erotic on Ren TV',
    '213123123123': 'dsfsdsdfsdfsdf'
}

console.log(you['213123123123'])

// Чтобы запустить этот скрипт напиши: node script.js

function multByFactor (value, multiplier = 1) {
    console.log(value * multiplier)

    return value * multiplier
}

multByFactor(5, 10)

const multiplier = (value, multiplier = 1) => {
    console.log(value * multiplier)

    return value * multiplier
}

multiplier(5)