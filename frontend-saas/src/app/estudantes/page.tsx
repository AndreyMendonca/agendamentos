"use client"
import { AlunoDialog } from "@/components/alunos/dialog";
import { columns } from "@/components/alunos/table/columns";
import { DataTable } from "@/components/alunos/table/data-table";
import { DialogDelete } from "@/components/dialog-delete";
import { Template } from "@/components/template/template";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { useEstudanteService } from "@/services/estudante.service";
import { Estudante } from "@/types/Estudante";
import { CirclePlus, UserRound, UserRoundPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Page = () => {
    const useService = useEstudanteService();
    const [openDialog, setOpenDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [estudantes, setEstudantes] = useState<Estudante[]>([]);
    const [idDelete, setIdDelete] = useState<number>(0);

    const buscarTodos = async () => {
        const lista = await useService.buscarTodos();
        setEstudantes(lista);
    }

    const handleDeleteClick = async (id: number) => {
        setOpenDeleteDialog(true)
        setIdDelete(id);
    };
    const columnsAluno = columns(handleDeleteClick)

    const handleSalvar = async (estudante: Estudante) => {
        await useService.salvar(estudante);
        toast.success("Sucesso", {
            description: "Estudante salvo com sucesso"
        })
    }

    useEffect(() => {
        buscarTodos();
    }, [])

    return (
        <Template>
            <Card className="mx-5">
                <CardHeader>
                    <CardTitle>Estudantes</CardTitle>
                    <CardDescription>Gerencimento de estudantes</CardDescription>
                    <CardAction>
                        <Button onClick={() => setOpenDialog(true)}>
                            Cadastrar
                            <UserRoundPlus />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columnsAluno} data={estudantes} />
                </CardContent>
            </Card>
            <AlunoDialog open={openDialog} onOpenChange={setOpenDialog} updatePage={buscarTodos} save={handleSalvar}/>
            <DialogDelete
                open={openDeleteDialog}
                onOpenChange={setOpenDeleteDialog}
                onConfirm={async () => {
                    await useService.deletar(idDelete);
                    toast("Sucesso", {
                        description: "Deleção feita com sucesso!"
                    })
                    buscarTodos();
                }}
            />
        </Template>
    )
}

export default Page;