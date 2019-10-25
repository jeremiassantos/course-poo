
export class Endereco {

    cep: string

    rua: string

    cidade: string

    numero: number

    constructor(cep: string, rua: string, cidade: string, numero: number) {
        this.cep = cep
        this.rua = rua
        this.cidade = cidade
        this.numero = numero
    }   
   
}