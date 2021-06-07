export class Medicamento {

    constructor(
        public id_medicamento?: number,
        public nombre?: string,
        public codigo_barras?: number,
        public patologia?: string,
        public laboratorio?: string,
        public efect_second?: string,
        public form_farm?: string

    ) {}
}