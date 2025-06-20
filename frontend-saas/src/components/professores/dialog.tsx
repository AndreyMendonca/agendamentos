import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { ProfessorCadastro } from "./cadastro";

type Props = {
    open: boolean;
    onOpenChange : (open: boolean) => void;
}

export const ProfessorDialog = ( {open, onOpenChange}: Props) =>{
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cadastro de Professores</DialogTitle>
                    <DialogDescription>Os campos marcados com * são obrigatórios</DialogDescription>
                </DialogHeader>
                <ProfessorCadastro onOpenChange={onOpenChange}/>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}