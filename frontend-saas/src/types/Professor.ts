export type Professor = {
    id?: number;
    nome: string,
    sobrenome: string, 
    especialidade?: string,
    nascimento?: Date | null;
    cpf: string;
    status: boolean;
}