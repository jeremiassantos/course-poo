import { AbstractPostoPedagio } from "./AbstractPostoPedagio";
import { SemPagarPostoPedagio } from "./SemPagarPostoPedagio";

export class PostoPedagioCCR1 extends AbstractPostoPedagio implements SemPagarPostoPedagio {

    
    existiSemParar(): boolean {
        return true
    }
}