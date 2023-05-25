class Animal {
    constructor(){
        this.especie = 'Mamifero'
    }
        
}

class Cachorro extends Animal{
    constructor(nome,raca){
        super()
        this.nome = nome
        this.raca = raca
    }

    andar = () => `${this.nome} esta andando agora...`
    
    alimentar = alimento => {
        let comida = alimento
        return `${this.nome} alimenta-se de ${comida}`
    }
}

let dog = new Cachorro('rex', 'pitbull')
let dog2 = new Cachorro('amora','pudol')

console.log(dog.andar())
console.log(dog2.alimentar('ração'))