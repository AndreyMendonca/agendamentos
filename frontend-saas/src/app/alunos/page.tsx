"use client"
import { AlunoDialog } from "@/components/alunos/dialog";
import { DialogDelete } from "@/components/dialog-delete";
import { Template } from "@/components/template/template";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export const Page = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    return (
        <Template>
            <Card className="mx-5">
                <CardHeader>
                    <CardTitle>Alunos</CardTitle>
                    <CardDescription>Gerencimento de alunos</CardDescription>
                    <CardAction>
                        <Button onClick={()=> setOpenDialog(true)}>Cadastrar</Button>
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
                            </TableBody>
                        </Table>
                    </Card>
                </CardDescription>
                <AlunoDialog open={openDialog} onOpenChange={setOpenDialog} />
                <DialogDelete open={openDeleteDialog} onOpenChange={setOpenDeleteDialog} />
            </Card>
        </Template>
    )
}

export default Page;