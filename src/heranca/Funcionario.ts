import { Pessoa } from "../classe/Pessoa";


export class Funcionario extends Pessoa {

    salario: number

    cargo: string

    trabalhaOuJogaSinuca: boolean

    constructor(nome: string) {
        super(nome)
        super.setarNomeImpl("Funcionario")
    }

    taFeliz(feliz: boolean) {
        if(feliz) {
            console.log(`To feliz!!!!`)
        } else {
            this.pedirDemissao()
        }
    }

    private pedirDemissao() {
        console.log(`Funcionario ${this.nome} escrevendo a cartinha.........`)
    }
}


const funcionarioJoao: Funcionario = new Funcionario("Ana")

funcionarioJoao.salario = 150000000
funcionarioJoao.trabalhaOuJogaSinuca = false

funcionarioJoao.taFeliz(false)

console.log(funcionarioJoao)