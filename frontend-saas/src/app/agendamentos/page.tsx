"use client"
import { AgendamentoDialog } from "@/components/agendamentos/dialog";
import { Template } from "@/components/template/template";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";
import { useState } from "react";

export const Page = () => {
    const [openDialog, setOpenDialog] =  useState(false);
    return (
        <Template>
            <Card className="mx-5">
                <CardHeader>
                    <CardTitle>Agendamentos</CardTitle>
                    <CardDescription>Gerencimento de Agendamentos</CardDescription>
                    <CardAction>
                        <Button onClick={() => setOpenDialog(true)} className="cursor-pointer">
                            Agendar
                            <CalendarClock/>
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardDescription className="px-10">
                    <div>tabela</div>
                </CardDescription>
            </Card>
            <AgendamentoDialog open={openDialog} onOpenChange={setOpenDialog} />
        </Template>
    )
}

export default Page;