import { Estudante } from "./Estudante";
import { Professor } from "./Professor";

export type AgendamentoResquest = {
    estudante: number;
    professor: number;
    dataAgendamento: Date;
    conteudo: string;
}

export type Agendamento = {
    id: number;
    estudante:Estudante;
    professor: Professor;
    dataAgendamento: Date;
    statusAgendamento: "NAO_REALIZADO" | "REALIZADO" | "CANCELADO";
}