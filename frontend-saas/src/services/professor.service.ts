import { Professor } from "@/app/types/Professor";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
    },
});

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

}


export const useProfessorService = () => new ProfessorService();