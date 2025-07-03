import { Professor } from "@/types/Professor";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { ProfessorCadastro } from "./cadastro";

type Props = {
    open: boolean;
    onOpenChange : (open: boolean) => void;
    updatePage: () => void;
    professor: Professor | null;
    save: (professor: Professor) => void;
    update: (professor: Professor, id: number) => void;
}

export const ProfessorDialog = ( {open, onOpenChange, updatePage, professor, save, update}: Props) =>{
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Cadastro de Professores</DialogTitle>
                    <DialogDescription>Os campos marcados com * são obrigatórios</DialogDescription>
                </DialogHeader>
                <ProfessorCadastro onOpenChange={onOpenChange} updatePage={updatePage} professor={professor} save={save} update={update}/>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}