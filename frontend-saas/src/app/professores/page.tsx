"use client"
import { ProfessorDialog } from "@/components/professores/dialog";
import { Template } from "@/components/template/template";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense, useEffect, useState } from "react";
import { Professor } from "../../types/Professor";
import { useProfessorService } from "@/services/professor.service";
import { columns } from "@/components/professores/table/columns";
import { DataTable } from "@/components/professores/table/data-table";
import { toast } from "sonner";
import { UserRoundPlus } from "lucide-react";
import { DialogDelete } from "@/components/dialog-delete";

export const Page = () => {
    const useService = useProfessorService();
    const [openDialog, setOpenDialog] = useState(false);
    const [professores, setProfessores] = useState<Professor[]>([])
    const [professor, setProfessor] = useState<Professor | null>(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [idDelete, setIdDelete] = useState<number>(0);


    const buscarTodos = async () => {
        const lista = await useService.buscarTodos();
        setProfessores(lista);
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
    const handleUpdateClick = (professor: Professor) => {
        setOpenDialog(true)
        setProfessor(professor)
    }

    const columnsProfessor = columns(handleDeleteClick, handleUpdateClick);

    const handleSalvar = async (professor: Professor) => {
        await useService.salvar(professor);
        toast.success("Sucesso", {
            description: "Professor salvo com sucesso!"
        })
    }

    const handleUpdate = async (professor: Professor, id: number) => {
        await useService.salvar(professor, id)
        toast.success("Sucesso", {
            description: "Professor atualizado com sucesso!"
        })
    }

    useEffect(() => {
        buscarTodos();
    }, [])



    return (
        <Template>
            <Card className="mx-5 mb-5">
                <CardHeader>
                    <CardTitle>Professores</CardTitle>
                    <CardDescription>Gerencimento de professores</CardDescription>
                    <CardAction>
                        <Button onClick={() => { setOpenDialog(true); setProfessor(null) }} className="cursor-pointer">
                            Cadastrar
                            <UserRoundPlus />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columnsProfessor} data={professores} />
                </CardContent>
            </Card>
            <ProfessorDialog open={openDialog} onOpenChange={setOpenDialog} updatePage={buscarTodos} professor={professor} save={handleSalvar} update={handleUpdate} />
            <DialogDelete
                open={openDeleteDialog}
                onOpenChange={setOpenDeleteDialog}
                onConfirm={handleDelete}
            />
        </Template>
    )
}

export default Page;