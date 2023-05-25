const listNumber = [1,2,3,4,5]
const newListNumber = listNumber

console.log(listNumber)
console.log(newListNumber)

// Usando o operador spread

console.log('=====================')

const list = [1,2,3,4,5]
const newList = [...list,587]

console.log(list)
console.log(newList)

const rex = {
    name:'rex'
}

const max = {... rex, age:3, raca:'pitbull'}
max.name = 'bilu'

console.log(rex)
console.log(max)

// operador rest

const soma = (...numbers) => numbers.reduce((a,b) => a + b, 0)
console.log(soma(1,3,5,8,9,120,458))