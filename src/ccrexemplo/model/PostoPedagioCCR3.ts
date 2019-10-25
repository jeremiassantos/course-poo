import { AbstractPostoPedagio } from "./AbstractPostoPedagio";
import { SemPagarPostoPedagio } from "./SemPagarPostoPedagio";

export class PostoPedagioCCR3 extends AbstractPostoPedagio implements SemPagarPostoPedagio {

    existiSemParar(): boolean {
        return true
    }
}