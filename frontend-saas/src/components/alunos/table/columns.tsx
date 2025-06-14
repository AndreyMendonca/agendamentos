"use client"
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export type Aluno = {
    id: number;
    nome: string;
    whatsapp: string;
}

export const columns: ColumnDef<Aluno>[] = [
    {
        accessorKey: "nome",
        header: ({column}) => {
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
        cell: ({row}) => <TableCell className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] font-medium">{row.getValue("nome")}</TableCell>
    },
    {
        accessorKey: "whatsapp",
        header: "Whatsapp"
    },
    {
        header: "Ações",
        cell: ({ row }) => {
            const aluno = row.original
            //consigo pegar o id do alunoo, so acessar aluno.id e podemos passar o id para fazer a deleção
            return (
                <div className="flex gap-2">
                    <Button variant="outline" className="cursor-pointer">Editar</Button>
                    <Button onClick={ () => {}} variant="destructive" className="cursor-pointer">Excluir</Button>
                </div>
            )
        }
    }
]