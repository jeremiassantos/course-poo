import { AbstractPostoPedagio } from "./AbstractPostoPedagio";
import { SemPagarPostoPedagio } from "./SemPagarPostoPedagio";

export class PostoPedagioCCR2 extends AbstractPostoPedagio implements SemPagarPostoPedagio {

    existiSemParar(): boolean {
        return false
    }
}