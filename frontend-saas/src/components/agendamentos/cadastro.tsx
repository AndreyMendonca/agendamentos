'use client'
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDown, ChevronDownIcon, Command } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { CommandGroup, CommandInput, CommandItem } from "../ui/command";

const formSchema = z.object({
    dataAgendamento: z.date(),
    horarioAgendamento: z.string(),
    professor: z.number(),
    aluno: z.number(),
    conteudo: z.string().min(2, "Campo Obrigatório")
})

type Props = {
    onOpenChange: (open: boolean) => void;
}

export const AgendamentoCadastro = ({ onOpenChange }: Props) => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {}
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log('submit')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex gap-2">
                    <div className="flex gap-5 flex-1">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="dataAgendamento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data e hora *</FormLabel>
                                        <FormControl>
                                            <Popover open={open} onOpenChange={setOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        id="date-picker"
                                                        className="flex-1 justify-between font-normal"
                                                    >
                                                        {field.value ? field.value.toLocaleDateString() : "Selecione a data"}
                                                        <ChevronDownIcon />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        captionLayout="dropdown"
                                                        onSelect={(date) => {
                                                            field.onChange(date);
                                                            setOpen(false)
                                                        }}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="horarioAgendamento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Hora</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="time"
                                                placeholder="Digite a especialidade"
                                                defaultValue="10:30"
                                                className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                                step="1"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </div>
                    <div className="flex flex-col p-2 flex-1 gap-2 border-4">
                        <div className="flex gap-2">
                            <div className="flex-1 border-2">
                                <FormField
                                    control={form.control}
                                    name="professor"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Professor</FormLabel>
                                            <FormControl>
                                                {/* Logica para buscar os professores */}
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex-1 border-2">
                                ...
                            </div>
                        </div>
                        <div className="border-2 h-20">

                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit" className="flex-1 md:flex-none">Salvar</Button>
                </div>
            </form>
        </Form>
    )
}