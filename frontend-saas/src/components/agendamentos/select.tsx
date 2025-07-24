import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Professor } from "@/types/Professor";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { cn } from "@/lib/utils";
import { Estudante } from "@/types/Estudante";

type Props = {
    lista: Professor[] | Estudante[];
    onChange: (value: number) => void;
    error?: boolean;
    opcSelecionada: Professor | Estudante | undefined;
}

export const AgendamentoSelect = ({ lista, onChange, error, opcSelecionada }: Props) => {
    const [open, setOpen] = useState(false);
    const [selecionado, setSelecionado] = useState<Professor | Estudante | null>(opcSelecionada ?? null);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        "justify-between",
                        error && "border-red-500 focus:ring-red-500"
                    )}
                >
                    {selecionado
                        ? `${selecionado.nome} ${selecionado.sobrenome}`
                        : "Selecione..."}
                    {
                        selecionado ? <Check className="opacity-50" /> : <ChevronsUpDown className="opacity-50" />
                    }

                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Procurar..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Nenhum resultado</CommandEmpty>
                        <CommandGroup>
                            {lista.map((obj) => (
                                <CommandItem
                                    key={obj.id}
                                    value={obj.nome}
                                    onSelect={() => {
                                        setSelecionado(obj)
                                        setOpen(false)
                                        onChange(obj.id!);
                                    }}
                                >
                                    <div>
                                        <p>{obj.nome} {obj.sobrenome}</p>
                                    </div>

                                    <Check
                                        className={cn(
                                            "h-4 w-4",
                                            selecionado?.id === obj.id
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