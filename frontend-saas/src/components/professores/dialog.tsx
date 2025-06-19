import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
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
                </DialogHeader>
                <ProfessorCadastro/>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit" className="cursor-pointer">Salvar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}