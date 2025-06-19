"use client"
import { ProfessorDialog } from "@/components/professores/dialog";
import { Template } from "@/components/template/template";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export const Page = () => {
    const [openDialog, setOpenDialog] =  useState(false);
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
                    <div>tabela</div>
                </CardDescription>
            </Card>
            <ProfessorDialog open={openDialog} onOpenChange={setOpenDialog} />
        </Template>
    )
}

export default Page;