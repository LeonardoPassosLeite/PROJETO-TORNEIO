export interface Compromisso {
    data: Date;
    titulo: string;
    hora: string;
    descricao: string;
    compromissos?: Compromisso[];
    mes?: string;
    diaSemana?: string;
}