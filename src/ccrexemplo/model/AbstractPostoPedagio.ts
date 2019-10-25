
export abstract class AbstractPostoPedagio {

    valorTarifa: number

    nomeFilial: string

    constructor(valorTarifa: number, nomeFilial: string) {
        this.valorTarifa = valorTarifa;
        this.nomeFilial = nomeFilial
    }
    

    receberValor(valorPago: number): number {

        if(valorPago == this.valorTarifa) {
            console.log(`Boa viagem`)
            return 0
        }

        if(valorPago < this.valorTarifa) {
            console.log(`Saldo insificiente`)
            return 0
        }

        console.log(`Seu troco`)
        return valorPago - this.valorTarifa
    }
}