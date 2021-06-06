export class Medicamento {

    constructor(
        // tslint:disable-next-line: variable-name
        public nombre?: string,
        public codigo_barras?: string,
        public patologia?: string,
        public laboratorio?: string,
        public efect_second?: string,
        public form_farm?: string

    ) {}
}