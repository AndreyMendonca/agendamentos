import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Professor } from "@/types/Professor";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { cn } from "@/lib/utils";

type Props = {
    professores: Professor[];
}

export const AgendamentoSelect = ({ professores }: Props) => {
    const [open, setOpen] = useState(false);
    const [selecionado, setSelecionado] = useState<Professor | null>(null);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {selecionado
                        ? professores.find((professor) => professor.id === selecionado.id)?.nome 
                        : "Selecione o professor..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Procurar..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Nenhum resultado</CommandEmpty>
                        <CommandGroup>
                            {professores.map((professor) => (
                                <CommandItem
                                    key={professor.id}
                                    value={professor.nome}
                                    onSelect={(currentValue) => {
                                        //setValue(currentValue === value ? "" : currentValue)
                                        //setValue(currentValue as Roles)
                                        setSelecionado(professor)
                                        setOpen(false)
                                    }}
                                >
                                    <div>
                                        <p>{professor.nome} {professor.sobrenome}</p>
                                    </div>

                                    <Check
                                        className={cn(
                                            "h-4 w-4",
                                            selecionado?.id === professor.id
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}