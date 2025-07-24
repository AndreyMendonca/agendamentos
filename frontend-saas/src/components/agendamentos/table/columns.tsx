"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Agendamento } from "@/types/Agendamento"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, CircleX, Eye, PencilIcon, SquareCheckBig, SquareX, Trash2 } from "lucide-react"
import Link from "next/link"

export const columns = (onRealizadoClick: (id: number) => void, onCanceladoClick: (id: number) => void, onVisualizarClick:(agendamento: Agendamento) => void) : ColumnDef<Agendamento>[] => [
    {
        accessorKey: "conteudo",
        header: "Conteúdo",
    },
    {
        id: "estudante",
        accessorKey: "estudante.nome",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Estudante
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const agendamento = row.original;
            return (
                <p>{agendamento.estudante.nome} {agendamento.estudante.sobrenome}</p>
            )
        }
    },
    {
        accessorKey: "professor.nome",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Professor
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const agendamento = row.original;
            return (
                <p>{agendamento.professor.nome} {agendamento.professor.sobrenome}</p>
            )
        }
    },
    {
        accessorKey: "statusAgendamento",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const status = row.original.statusAgendamento;
            const agendamento = row.original;
            return (
                <div>
                    {
                        status === "REALIZADO" ?
                            <Badge variant="secondary" className="px-3 py-2 bg-green-400">Realizado</Badge> :
                            status === "CANCELADO" ?
                                <Badge variant="destructive" className="px-2 py-2">Cancelado</Badge> :
                                <div className="flex gap-5">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button onClick={() => onRealizadoClick(agendamento.id)} variant="outline" size="icon" className="rounded-full cursor-pointer">
                                                <SquareCheckBig />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Marcar como concluido</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button onClick={() => onCanceladoClick(agendamento.id)} variant="outline" size="icon" className="rounded-full cursor-pointer">
                                                <SquareX />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Marcar como cancelado</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                    }
                </div>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const agendamento = row.original;
            return (
                <div className="flex gap-5">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={() => onVisualizarClick(agendamento)} variant="outline" size="icon" className="rounded-full cursor-pointer">
                                <Eye />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Visualizar informações</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            )
        }
    }
]