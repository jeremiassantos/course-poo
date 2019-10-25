import { AbstractPostoPedagio } from "./AbstractPostoPedagio";
import { PostoPedagioCCR1 } from "./PostoPedagioCCR1";
import { PostoPedagioCCR2 } from "./PostoPedagioCCR2";
import { PostoPedagioCCR3 } from "./PostoPedagioCCR3";

export class PostoFactory {

    private static instance = new PostoFactory

    private filiais: Array<AbstractPostoPedagio> = new Array

    private constructor() {
        this.filiais.push(new PostoPedagioCCR1(12, "Curitiba"))
        this.filiais.push(new PostoPedagioCCR2(5, "Ponta grossa"))
        this.filiais.push(new PostoPedagioCCR3(7, "Guarapuava"))
    }

    static getInstance(): PostoFactory {
        return this.instance
    }

    findPostoByName(postoName: string, valor: number): number {

        const resultFind = this.filiais.filter(f => f.nomeFilial == postoName)

        if(resultFind.length == 0) {
            console.log(`Filial ${postoName} não encontrada`)
            return 0
        }

        const posto: AbstractPostoPedagio = resultFind[0]

        const semparar = resultFind[0];

        return posto.receberValor(valor);
    }

}


const curitiba = PostoFactory.getInstance().findPostoByName("Curitiba", 12)
PostoFactory.getInstance().findPostoByName("asasas", 12)

console.log(curitiba)