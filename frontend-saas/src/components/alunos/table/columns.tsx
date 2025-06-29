"use client"

import { DialogDelete } from "@/components/dialog-delete"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Estudante } from "@/types/Estudante"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, PencilIcon, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export const columns = (onDeleteClick: (id: number) => void): ColumnDef<Estudante>[] => [
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
            const estudante  = row.original;
            return (
                <p>{estudante.nome} {estudante.sobrenome}</p>
            )
        }
    },
    {
        accessorKey: "cpf",
        header: "CPF",
    },
    {
        accessorKey: "whatsapp",
        header: "WhatsApp",
        cell: ({row}) => {
            const estudante = row.original;
            return (
                <Link href={`https://api.whatsapp.com/send/?phone=55${estudante.whatsapp}`} target="_blank">
                    {estudante.whatsapp}
                </Link>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const estudante = row.original;
            
            return (
                <div className="flex gap-5">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                                <PencilIcon />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Editar Professor</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={() => estudante.id && onDeleteClick(estudante.id)}  variant="outline" size="icon" className="rounded-full cursor-pointer">
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