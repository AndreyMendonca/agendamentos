import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const AlunoDialog = ({ open, onOpenChange }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cadastro de Alunos</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit" className="cursor-pointer">Salvar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}