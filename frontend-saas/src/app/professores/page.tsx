"use client"
import { ProfessorDialog } from "@/components/professores/dialog";
import { Template } from "@/components/template/template";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense, useEffect, useState } from "react";
import { Professor } from "../types/Professor";
import { useProfessorService } from "@/services/professor.service";
import { columns } from "@/components/professores/table/columns";
import { DataTable } from "@/components/professores/table/data-table";

export const Page = () => {
    const useService = useProfessorService();
    const [openDialog, setOpenDialog] =  useState(false);
    const [professores, setProfessores] = useState<Professor[]>([])

    const buscarTodos = async () =>{
        const lista = await useService.buscarTodos();
        setProfessores(lista);
    }
    useEffect(()=>{
        buscarTodos();
        console.log(professores)
    },[])

    return (
        <Template>
            <Card className="mx-5">
                <CardHeader>
                    <CardTitle>Professores</CardTitle>
                    <CardDescription>Gerencimento de professores</CardDescription>
                    <CardAction>
                        <Button onClick={() => setOpenDialog(true)}>Cadastrar</Button>
                    </CardAction>
                </CardHeader>
                <CardDescription className="px-10">
                    <DataTable columns={columns} data={professores} />
                </CardDescription>
            </Card>
            <ProfessorDialog open={openDialog} onOpenChange={setOpenDialog} updatePage={buscarTodos}/>
        </Template>
    )
}

export default Page;