import { AgendamentoResquest } from "@/types/Agendamento";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { AgendamentoCadastro } from "./cadastro";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    save: (dto: AgendamentoResquest) => void;
    updatePage: () => void;
    dataFiltro: Date;
}

export const AgendamentoDialog = ({ open, onOpenChange, save, updatePage, dataFiltro }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="lg:w-full lg:!max-w-5xl">
                <DialogHeader>
                    <DialogTitle>Agendamentos</DialogTitle>
                    <DialogDescription>Os campos marcados com * são obrigatórios</DialogDescription>
                </DialogHeader>
                <AgendamentoCadastro onOpenChange={onOpenChange} save={save} updatePage={updatePage} dataFiltro={dataFiltro}/>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}