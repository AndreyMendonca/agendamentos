'use client'
import { useAgendamentoService } from "@/services/agendamento.service";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Agendamento } from "@/types/Agendamento";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const AulasRealizadas = () => {

    const useSerice = useAgendamentoService();
    const [agendamentosDia, setAgendamentosDia] = useState<Agendamento[]>([]);

    const buscarAgendamentosDoDia = async () => {
        try {
            const agendamentos = await useSerice.buscarUltimasRealizadas();
            setAgendamentosDia(agendamentos);
        } catch (error: any) {
            toast.error("Error", {
                description: "Erro ao fazer busca!"
            })
        }
    }

    useEffect(() => {
        buscarAgendamentosDoDia();
    }, [])
    return (
        <Card className="w-full max-w-xl max-h-96">
            <CardHeader>
                <CardTitle>Histórico das últimas aulas realizadas</CardTitle>
            </CardHeader>
            <CardContent className=" overflow-y-auto h-full scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} >
                <Table>
                    <TableCaption>Últimas 10 aulas concluidas</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Data da aula</TableHead>
                            <TableHead>Professor</TableHead>
                            <TableHead>Estudante</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            agendamentosDia.map((agendamento) => (
                                <TableRow key={agendamento.id} className="m-2">
                                    <TableCell>{new Date(agendamento.dataAgendamento).toLocaleDateString()}</TableCell>
                                    <TableCell>{agendamento.professor.nome}</TableCell>
                                    <TableCell>{agendamento.estudante.nome}</TableCell>
                                    <TableCell>{agendamento.estudante.whatsapp}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
};