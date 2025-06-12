import { Separator } from "../ui/separator"

export const Footer = () => {
    return (
        <footer className="flex flex-col text-md">
            <Separator />
            <p className="font-semibold text-center pt-3">Desenvolvido por Andrey Mendonça</p>
            <p className="text-muted-foreground text-sm text-center pb-3 ">Sistema AgendamentoFlix - 2025</p>
        </footer>
    )
}