import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const DialogDelete = ({ open, onOpenChange }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirmar exclusão</DialogTitle>
                    <DialogDescription>Tem certeza que deseja deletar este item? Esta ação não pode ser desfeita.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button className="cursor-pointer">Cancelar</Button>
                    </DialogClose>
                    <Button variant="destructive" className="cursor-pointer">Sim, quero deletar!</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}