import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { AgendamentoCadastro } from "./cadastro";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const AgendamentoDialog = ({ open, onOpenChange }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="lg:w-full lg:!max-w-5xl">
                <DialogHeader>
                    <DialogTitle>Agendamentos</DialogTitle>
                    <DialogDescription>Os campos marcados com * são obrigatórios</DialogDescription>
                </DialogHeader>
                <AgendamentoCadastro onOpenChange={onOpenChange} />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}