import { Estudante } from "@/types/Estudante";
import { api } from "./axios";
import axios from "axios";

class EstudanteService {
    async salvar(estudante: Estudante): Promise<void> {
        try {
            await api.post('estudantes', estudante);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                const status = error.response?.status;
                const message = error.response?.data?.message || "Erro ao salvar estudante";
                if (status === 409 || status === 400 || status) {
                    throw new Error(message);
                }
            }
            throw new Error("Erro inesperado ao salvar estudante");
        }
    }

    async buscarTodos() : Promise < Estudante[] > {
        const response = await api.get("estudantes");
        return response.data;
    }
    
    async deletar(id: number) : Promise < void> {
        await api.delete(`estudantes/${id}`);
    }
    
}

export const useEstudanteService = () => new EstudanteService();