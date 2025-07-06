import { Estudante } from "@/types/Estudante";
import { api } from "./axios";
import axios from "axios";
import { Agendamento, AgendamentoResquest } from "@/types/Agendamento";

class AgendamentoService {
    async salvar(dto: AgendamentoResquest): Promise<void> {
        try {
            await api.post('agendamentos', dto);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                const status = error.response?.status;
                const message = error.response?.data?.message || "Erro ao fazer agendamento";
                if (status === 409 || status === 400 || status) {
                    throw new Error(message);
                }
            }
            throw new Error("Erro inesperado ao salvar estudante");
        }
    }

    async buscarTodos(): Promise<Agendamento[]> {
        const response = await api.get("agendamentos");
        return response.data;
    }

    async statusRealizado(id: number): Promise<void> {
        try {
            await api.patch(`agendamentos/realizado/${id}`);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                const status = error.response?.status;
                const message = error.response?.data?.message || "Erro ao marcar agendamento como realizado";
                if (status) {
                    throw new Error(message);
                }
            }
            throw new Error("Erro inesperado ao marcar agendamento como realizado");
        }

    }

    async statusCancelado(id: number): Promise<void> {
        try {
            await api.patch(`agendamentos/cancelado/${id}`);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                const status = error.response?.status;
                const message = error.response?.data?.message || "Erro ao marcar agendamento como cancelado";
                if (status) {
                    throw new Error(message);
                }
            }
            throw new Error("Erro inesperado ao marcar agendamento como cancelado");
        }
    }
}

export const useAgendamentoService = () => new AgendamentoService();