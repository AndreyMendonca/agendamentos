"use client"
import { AlunoDialog } from "@/components/alunos/dialog";
import { Aluno, columns } from "@/components/alunos/table/columns";
import { DataTable } from "@/components/alunos/table/data-table";
import { DialogDelete } from "@/components/dialog-delete";
import { Template } from "@/components/template/template";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export const Page = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const data: Aluno[] = [
        {
            id: 1,
            nome: "Andrey Mendonca",
            whatsapp: "(11) 91234-5678"
        },
        {
            id: 2,
            nome: "Bruna Carvalho",
            whatsapp: "(21) 98765-4321"
        },
        {
            id: 3,
            nome: "Carlos Souza",
            whatsapp: "(31) 99876-5432"
        },
        {
            id: 4,
            nome: "Daniela Lima",
            whatsapp: "(41) 97654-3210"
        },
        {
            id: 5,
            nome: "Eduardo Silva",
            whatsapp: "(51) 96543-2109"
        },
        {
            id: 6,
            nome: "Fernanda Costa",
            whatsapp: "(61) 95432-1098"
        },
        {
            id: 7,
            nome: "Gabriel Martins",
            whatsapp: "(71) 94321-0987"
        },
        {
            id: 8,
            nome: "Helena Rocha",
            whatsapp: "(81) 93210-9876"
        },
        {
            id: 9,
            nome: "Igor Almeida",
            whatsapp: "(91) 92109-8765"
        },
        {
            id: 10,
            nome: "Juliana Ribeiro",
            whatsapp: "(31) 91098-7654"
        }
    ]


    return (
        <Template>
            <Card className="mx-5 hidden">
                <CardHeader>
                    <CardTitle>Alunos</CardTitle>
                    <CardDescription>Gerencimento de alunos</CardDescription>
                    <CardAction>
                        <Button onClick={() => setOpenDialog(true)}>Cadastrar</Button>
                    </CardAction>
                </CardHeader>
                <CardDescription className="px-10">
                    <Card className="shadow-2xl">
                        <Table>
                            <TableCaption>Lista completa de alunos</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-2/6">Nome</TableHead>
                                    <TableHead className="w-1/6">WhatsApp</TableHead>
                                    <TableHead className="w-2/3">Ações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Andrey Mendonça</TableCell>
                                    <TableCell>18 996698229</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button variant="outline" className="cursor-pointer">Editar</Button>
                                            <Button onClick={() => setOpenDeleteDialog(true)} variant="destructive" className="cursor-pointer">Excluir</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Andrey Mendonça</TableCell>
                                    <TableCell>18 996698229</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button variant="outline" className="cursor-pointer">Editar</Button>
                                            <Button onClick={() => setOpenDeleteDialog(true)} variant="destructive" className="cursor-pointer">Excluir</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Andrey Mendonça</TableCell>
                                    <TableCell>18 996698229</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button variant="outline" className="cursor-pointer">Editar</Button>
                                            <Button onClick={() => setOpenDeleteDialog(true)} variant="destructive" className="cursor-pointer">Excluir</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Andrey Mendonça</TableCell>
                                    <TableCell>18 996698229</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button variant="outline" className="cursor-pointer">Editar</Button>
                                            <Button onClick={() => setOpenDeleteDialog(true)} variant="destructive" className="cursor-pointer">Excluir</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Andrey Mendonça</TableCell>
                                    <TableCell>18 996698229</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button variant="outline" className="cursor-pointer">Editar</Button>
                                            <Button onClick={() => setOpenDeleteDialog(true)} variant="destructive" className="cursor-pointer">Excluir</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </CardDescription>
                <AlunoDialog open={openDialog} onOpenChange={setOpenDialog} />
                <DialogDelete open={openDeleteDialog} onOpenChange={setOpenDeleteDialog} />
            </Card>
            <Card className="mx-5">
                <CardHeader>
                    <CardTitle>Tabela inteligente</CardTitle>
                    <CardDescription>Gerencimento de alunos</CardDescription>
                    <CardAction>
                        <Button onClick={() => setOpenDialog(true)}>Cadastrar</Button>
                    </CardAction>
                </CardHeader>
                <CardDescription className="px-10">
                    <DataTable columns={columns} data={data} />
                </CardDescription>
            </Card>
        </Template>
    )
}

export default Page;