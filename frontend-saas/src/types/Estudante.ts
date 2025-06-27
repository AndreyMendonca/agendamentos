export type Estudante = {
    id?: number | null;
    cpf: string;
    nome: string;
    sobrenome: string;
    nascimento?: Date | null;
    cep: string;
    logradouro: string;
    numeroCasa: number;
    bairro: string;
    estado: string;
    cidade: string;
    telefone?: string | null;
    whatsapp: string;
    email?: string | null;
}