"use client"
import { AgendamentoDialog } from "@/components/agendamentos/dialog";
import { AgendamentoDialogStatus } from "@/components/agendamentos/dialog-status";
import { columns } from "@/components/agendamentos/table/columns";
import { DataTable } from "@/components/agendamentos/table/data-table";
import { Template } from "@/components/template/template";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAgendamentoService } from "@/services/agendamento.service";
import { Agendamento, AgendamentoResquest } from "@/types/Agendamento";
import { set } from "date-fns";
import { CalendarClock } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Page = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogStatus, setOpenDialogStatus] = useState(false);
    const [textoStatus, setTextoStatus] = useState<"REALIZADO" | "CANCELADO">("REALIZADO");
    const [idAgendamento, setIdAgendamento] = useState<number>(0);
    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
    const [agendamento, setAgendamento] = useState<Agendamento | null>(null)
    const useService = useAgendamentoService();
    const [dataFiltro, setDataFiltro] = useState<Date>(new Date());

    const buscarTodos = async (dia?: Date) => {
        if (!dia) {
            dia = new Date();
        }
        try {
            const lista = await useService.buscarTodosPorData(dia);
            setAgendamentos(lista);
        } catch (error: any) {
            toast.error("Erro!", {
                description: "Erro na API, favor consultar o administrador."
            });
        }
    }

    const handleRealizadoClick = async (id: number) => {
        setOpenDialogStatus(true)
        setTextoStatus("REALIZADO");
        setIdAgendamento(id);
    };
    const handleCanceladoClick = (id: number) => {
        setOpenDialogStatus(true)
        setTextoStatus("CANCELADO");
        setIdAgendamento(id);
    }
    const handleVisualizacao = (agendamento: Agendamento) =>{
        setAgendamento(agendamento);
        setOpenDialog(true);
    }
    const columnsAgendamento = columns(handleRealizadoClick, handleCanceladoClick, handleVisualizacao);

    const handleAgendamento = async (dto: AgendamentoResquest, id?: number) => {
        id ?
            await useService.salvar(dto, id) :
            await useService.salvar(dto);
        toast.success("Sucesso", {
            description: "Agendamento salvo com sucesso!"
        })
    }

    const handleStatus = async () => {
        try {
            if (textoStatus === "REALIZADO") {
                await useService.statusRealizado(idAgendamento);
            } else {
                await useService.statusCancelado(idAgendamento);
            }
            toast("Sucesso", {
                description: `Agendamento marcado como ${textoStatus} com sucesso!`
            })
            buscarTodos(dataFiltro);
        } catch (error: any) {
            toast.error("Erro!", {
                description: error.message
            });
        }
    }

    useEffect(() => {
        buscarTodos();
    }, [])

    return (
        <Template>
            <Card className="mx-5">
                <CardHeader>
                    <CardTitle>Agendamentos</CardTitle>
                    <CardDescription>Gerencimento de Agendamentos</CardDescription>
                    <CardAction>
                        <Button onClick={() => {setOpenDialog(true); setAgendamento(null)}} className="cursor-pointer">
                            Agendar
                            <CalendarClock />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardDescription className="px-10">
                    <DataTable columns={columnsAgendamento} data={agendamentos} filtro={buscarTodos} setDataFiltro={setDataFiltro} />
                </CardDescription>
            </Card>
            <AgendamentoDialog open={openDialog} onOpenChange={setOpenDialog} updatePage={buscarTodos} save={handleAgendamento} dataFiltro={dataFiltro} agendamento={agendamento} />
            <AgendamentoDialogStatus
                onOpenChange={setOpenDialogStatus}
                open={openDialogStatus}
                texto={textoStatus}
                onConfirm={handleStatus}
            />
        </Template>
    )
}

export default Page;