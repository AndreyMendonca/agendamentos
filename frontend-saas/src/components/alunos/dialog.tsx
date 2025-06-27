import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { AlunoCadastro } from "./cadastro";
import { Estudante } from "@/types/Estudante";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    save: (estudante: Estudante) => void;
    updatePage: () => void;
}

export const AlunoDialog = ({ open, onOpenChange, save, updatePage }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Cadastro de Estudante</DialogTitle>
                    <DialogDescription>Os campos marcados com * são obrigatórios</DialogDescription>
                </DialogHeader>
                <AlunoCadastro onOpenChange={onOpenChange} save={save} updatePage={updatePage}/>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}