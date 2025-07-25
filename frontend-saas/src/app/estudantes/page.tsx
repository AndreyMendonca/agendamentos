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
    const [estudante, setEstudante] = useState<Estudante | null>(null);

    const buscarTodos = async () => {
       await useService.buscarTodos()
        .then(setEstudantes)
        .catch(() => toast.error("Erro",{description: "API está com problemas"}))
        
    }

    const handleDelete = async () => {
        try {
            await useService.deletar(idDelete);
            toast("Sucesso", {
                description: "Deleção feita com sucesso!"
            })
            buscarTodos();
        } catch (error: any) {
            toast.error("Erro!", {
                description: error.message
            });
        }
    }

    const handleDeleteClick = async (id: number) => {
        setOpenDeleteDialog(true)
        setIdDelete(id);
    };
    const handleUpdateClick = (estudante: Estudante) => {
        setOpenDialog(true)
        setEstudante(estudante)
    }
    const columnsAluno = columns(handleDeleteClick, handleUpdateClick)

    const handleSalvar = async (estudante: Estudante) => {
        await useService.salvar(estudante);
        toast.success("Sucesso", {
            description: "Estudante salvo com sucesso!"
        })
    }

    const handleUpdate = async (estudante: Estudante, id: number) => {
        await useService.salvar(estudante, id)
        toast.success("Sucesso", {
            description: "Estudante atualizado com sucesso!"
        })
    }

    useEffect(() => {
        buscarTodos();
    }, [])

    return (
        <Template>
            <Card className="mx-5 mb-5">
                <CardHeader>
                    <CardTitle>Estudantes</CardTitle>
                    <CardDescription>Gerencimento de estudantes</CardDescription>
                    <CardAction>
                        <Button onClick={() => {setEstudante(null); setOpenDialog(true)}} className="cursor-pointer">
                            Cadastrar
                            <UserRoundPlus />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columnsAluno} data={estudantes} />
                </CardContent>
            </Card>
            <AlunoDialog open={openDialog} onOpenChange={setOpenDialog} updatePage={buscarTodos} save={handleSalvar} update={handleUpdate} estudante={estudante} />
            <DialogDelete
                open={openDeleteDialog}
                onOpenChange={setOpenDeleteDialog}
                onConfirm={handleDelete}
            />
        </Template>
    )
}

export default Page;