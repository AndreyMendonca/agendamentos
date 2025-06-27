import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { AlunoCadastro } from "./cadastro";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const AlunoDialog = ({ open, onOpenChange }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Cadastro de Alunos</DialogTitle>
                    <DialogDescription>Os campos marcados com * são obrigatórios</DialogDescription>
                </DialogHeader>
                <AlunoCadastro onOpenChange={onOpenChange} />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}