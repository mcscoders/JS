const frutas = ['maça','goiaba','pera']//lista de frutas
//desistruturando
let [fruta1,,fruta2] = frutas // ignora a goiaba e pega a uva

console.log(fruta1)
console.log(fruta2)

// é mais usado em objetos

const pessoa ={
    nome:'marcio',
    pais:'brasil',
    idioma:'portugues',
    idade:36,
    sexo:'M'
}
/// IMPORTANTE///... as variaveis devem ser amesma do objeto a função recebe como parametro o dono dos atributos
const localidade = ({pais,idade}) => `Você vive no ${pais} e tem ${idade} anos.`

console.log(localidade(pessoa))