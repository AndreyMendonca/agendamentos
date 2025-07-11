"use client";
import { Agendamento } from "@/types/Agendamento";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { use, useEffect, useState } from "react";
import { useAgendamentoService } from "@/services/agendamento.service";
import { toast } from "sonner";
import { Badge } from "./ui/badge";

export const AgendamentoDia = () => {
    const useSerice = useAgendamentoService();
    const [agendamentosDia, setAgendamentosDia] = useState<Agendamento[]>([]);
    const hoje = new Date();

    const buscarAgendamentosDoDia = async () => {
        try {
            const agendamentos = await useSerice.buscarTodosPorData(hoje);
            setAgendamentosDia(agendamentos);
        } catch (error: any) {
            console.log(error);
            toast.error("Error", {
                description: "Erro ao fazer busca!"
            })
        }
    }

    useEffect(() => {
        buscarAgendamentosDoDia();
    }, [])

    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>Agendamentos do dia</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>{hoje.toLocaleDateString()}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Horário</TableHead>
                            <TableHead>Professor</TableHead>
                            <TableHead>Estudante</TableHead>
                            <TableHead>Whatsapp</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            agendamentosDia.map((agendamento) => (
                                <TableRow key={agendamento.id} className="m-2">
                                    <TableCell>{new Date(agendamento.dataAgendamento).toLocaleTimeString([],{hour: '2-digit',minute:'2-digit'})}</TableCell>
                                    <TableCell>{agendamento.professor.nome}</TableCell>
                                    <TableCell>{agendamento.estudante.nome}</TableCell>
                                    <TableCell>{agendamento.estudante.whatsapp}</TableCell>
                                    <TableCell className="capitalize text-center">
                                        {agendamento.statusAgendamento === "REALIZADO" ?
                                            <Badge variant="secondary" className="px-3 py-2 bg-green-400">Realizado</Badge> 
                                                : agendamento.statusAgendamento === "CANCELADO" ?
                                            <Badge variant="destructive" className="px-2 py-2">Cancelado</Badge> :
                                            <Badge variant="outline" className="px-2 py-2">Não realizado</Badge>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
};