export class Medicamento {

    constructor(
        // tslint:disable-next-line: variable-name
        public idMedicamento?: number,
        public composicion?: string,
        public nombre?: string,
        public codigoBarras?: number,
        public comentarios?: string

    ) {}
}