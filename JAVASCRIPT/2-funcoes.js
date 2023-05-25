// Funçoẽs normais

function ola(){
    return `Olá !`
}

function olaPessoa(name){
    return `Olá ${name} tudo bem?`
}

function apresentar(name, idade){
    return `Olá eu sou ${name} e tenho ${idade} anos!`
}

console.log(ola())
console.log(olaPessoa('Márcio'))
console.log(apresentar('Ana', '25'))


console.log('======================')

// Arrow function

const ola2 = () => {
    return `Olá blz-2`
}

const yourName = (name) => {
    return `Meu nome é ${name} muito prazer!`
}

const nameAge =(name, age) => {
    return `Sou ${name} e tenho ${age} anos`
}

// arrow function com apenas um retorno pode ser decharada em uma unica linha assim:
// com parametros
const dog = raca => `Pitbul`
// sem parametros
const animal = () => `Mamifero`

console.log(ola2())
console.log(yourName('Cruz'))
console.log(nameAge('John', 6))
console.log(dog())
console.log(animal())