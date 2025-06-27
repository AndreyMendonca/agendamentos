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

    return (
        <Template>
            <Card className="mx-5">
                <CardHeader>
                    <CardTitle>Tabela inteligente</CardTitle>
                    <CardDescription>Gerencimento de alunos</CardDescription>
                    <CardAction>
                        <Button onClick={() => setOpenDialog(true)}>Cadastrar</Button>
                    </CardAction>
                </CardHeader>
                <CardDescription className="px-10 hidden">
                </CardDescription>
                <AlunoDialog open={openDialog} onOpenChange={setOpenDialog} />
                <DialogDelete open={openDeleteDialog} onOpenChange={setOpenDeleteDialog} />
            </Card>
        </Template>
    )
}

export default Page;