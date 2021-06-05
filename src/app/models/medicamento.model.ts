export class Medicamento {

    constructor(
        // tslint:disable-next-line: variable-name
        public id_medicament?: number,
        public composicio?: string,
        public nom?: string,
        public codi_barres?: number,
        public comentaris?: string,
        public idioma?: string,

    ) {}
}