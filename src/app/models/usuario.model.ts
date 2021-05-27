export class Usuario {

    constructor(
        // tslint:disable-next-line: variable-name
        public id_usuari?: number,
        public nom?: string,
        public cognom?: string,
        public telefon?: number,
        public email?: string,
        public dni?: string,
        public contrasenya?: string,
        // tslint:disable-next-line: variable-name
        public num_colegiat?: number,
        public altres?: string

    ) {}
}
