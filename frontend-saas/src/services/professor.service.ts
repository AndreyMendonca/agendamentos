import { Professor } from "@/types/Professor";
import axios from "axios";
import { api } from "./axios";

class ProfessorService {
    async salvar(professor: Professor): Promise<void> {
        try {
            await api.post("professores",professor);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                const status = error.response?.status;
                const message = error.response?.data?.message || "Erro ao salvar professor";
                if (status === 409 || status === 400 || status ) {
                    throw new Error(message);
                }
            }
            throw new Error("Erro inesperado ao salvar professor");
        }
    }

    async buscarTodos() : Promise<Professor[]>{
        const response = await api.get("professores");
        return response.data;
    }

    async deletar(id: number) :Promise<void> {
        await api.delete(`professores/${id}`); 
    }

}


export const useProfessorService = () => new ProfessorService();