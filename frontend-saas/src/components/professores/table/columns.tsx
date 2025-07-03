"use client"
import { Professor } from "@/types/Professor"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, PencilIcon, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const columns=(onDeleteClick: (id: number) => void, onUpdateClick: (professor: Professor) => void): ColumnDef<Professor>[] => [
    {
        accessorKey: "nome",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nome
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({row}) => {
            const professor =  row.original;
            return (
                <p>{professor.nome} {professor.sobrenome}</p>
            )
        }
    },
    {
        accessorKey: "especialidade",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Especialidade
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "status",
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
        cell: ({row}) => {
            const ativo: boolean = row.original.status;
            return (
                <div className="ml-3">
                    {
                        ativo ?
                            <Badge variant="outline" className="px-3 py-2">Ativo </Badge> :
                            <Badge variant="secondary" className="px-2 py-2">Inativo</Badge>
                    }
                </div>
                
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const professor = row.original;
            return (
                <div className="flex gap-5">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={() => onUpdateClick(professor)}  variant="outline" size="icon" className="rounded-full cursor-pointer">
                                <PencilIcon />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Editar Professor</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={() => professor.id && onDeleteClick(professor.id)} variant="outline" size="icon" className="rounded-full cursor-pointer">
                                <Trash2 />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Deletar Professor</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            )
        }
    }
]