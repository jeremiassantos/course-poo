import { Endereco } from "./Endereco";

export class Pessoa {

    // Características
    nome: string

    cpf: string

    sexo: string

    idade: number

    rg: string

    endereco: Endereco

    implName: string

    constructor(nome: string) {
        this.nome = nome
    }

    // Comportamento
    andar() {
        console.log(`Pessoa ${this.nome} andando`)
    }

    correr() {
        console.log(`Pessoa ${this.nome} correndo`)
    }

    comer() {
        console.log(`Pessoa ${this.nome} comer`)
    }

    temEndereco(): boolean {
        return this.endereco != null
    }

    protected setarNomeImpl(impl: string) {
        this.implName = impl
    }
}

const joao: Pessoa = new Pessoa("João")
joao.comer()
joao.endereco = new Endereco("56166", "Rua José", "Curitiba", 54)
if(joao.temEndereco()) {
    console.log(joao.endereco.cep)
    const endereco: Endereco = joao.endereco
}

const ana: Pessoa = new Pessoa("Ana")
ana.correr()
console.log(`${ana.nome} tem endereço ${ana.temEndereco()}`, ana.endereco)

const karl: Pessoa = new Pessoa("Karl")
karl.andar()


const bisavo: Pessoa = new Pessoa("Jonilvaldo")