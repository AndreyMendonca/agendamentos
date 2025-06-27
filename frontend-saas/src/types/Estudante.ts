export type Estudante = {
    id?: number;
    cpf: string;
    nome: string;
    sobrenome: string;
    nascimento: string | null;
    cep: string;
    logradouro: string;
    numeroCasa: string;
    bairro: string;
    estado: string;
    cidade: string;
    telefone: string | null;
    whatsapp: string;
    email: string;
}