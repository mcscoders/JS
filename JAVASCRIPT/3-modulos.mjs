import pessoa from "./modulos/pessoa.mjs";
//importando e criando um alias
import p from "./modulos/pessoa.mjs";
//importação nomeada
import { ola, soma } from "./modulos/util.mjs";

console.log(pessoa)
console.log(p)
console.log(ola(p.name))
console.log(soma(7,9))