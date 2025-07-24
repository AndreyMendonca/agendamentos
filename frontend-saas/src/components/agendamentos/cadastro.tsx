'use client'
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { number, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, ChevronDown, ChevronDownIcon, Command } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { AgendamentoSelect } from "./select";
import { Professor } from "@/types/Professor";
import { useProfessorService } from "@/services/professor.service";
import { useEstudanteService } from "@/services/estudante.service";
import { Estudante } from "@/types/Estudante";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { TimePickerDemo } from "../ui/time-picker-demo";
import { ptBR } from "date-fns/locale";
import { Agendamento, AgendamentoResquest } from "@/types/Agendamento";
import { toast } from "sonner";

const formSchema = z.object({
    dataAgendamento: z.date({ required_error: "Campo Obrigatório" }),
    professor: z.number({ required_error: "Campo Obrigatório"}).positive("Campo Obrigatório"),
    estudante: z.number({ required_error: "Campo Obrigatório"}).positive("Campo Obrigatório"),
    conteudo: z.string({ required_error: "Campo Obrigatório" }).min(2, "Campo Obrigatório")
})

type Props = {
    onOpenChange: (open: boolean) => void;
    save: (dto: AgendamentoResquest, id?: number) => void;
    updatePage: (data?:Date) => void;
    dataFiltro: Date;
    agendamento?: Agendamento | null;
}

export const AgendamentoCadastro = ({ onOpenChange, save, updatePage, dataFiltro, agendamento }: Props) => {
    const professorService = useProfessorService();
    const estudanteService = useEstudanteService();
    const [professores, setProfessores] = useState<Professor[]>([]);
    const [estudantes, setEstudantes] = useState<Estudante[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            dataAgendamento: agendamento?.dataAgendamento ? new Date(agendamento?.dataAgendamento) : undefined,
            conteudo: agendamento?.conteudo ?? "",
            professor: agendamento?.professor.id ?? 0,
            estudante: agendamento?.estudante.id ?? 0,
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            agendamento?.id ?
                await save(values, agendamento.id) : 
                await save(values)
            onOpenChange(false);
            updatePage(dataFiltro);
        } catch (error: any) {
            toast.error("Erro!", {
                description: error.message
            })
        }
    }

    const pegarProfessores = async () => {
        const lista = await professorService.buscarTodos();
        setProfessores(lista);
    }

    const pegarEstudante = async () => {
        const lista = await estudanteService.buscarTodos();
        setEstudantes(lista);
    }

    useEffect(() => {
        pegarProfessores();
        pegarEstudante();
    }, [])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2 mb-3 lg:flex-row">
                    <div className="lg:w-1/3 mb-3">
                        <FormField
                            control={form.control}
                            name="dataAgendamento"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="text-left">Data e Horário *</FormLabel>
                                    <Popover>
                                        <FormControl>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        "justify-start text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {field.value ? (
                                                        `${field.value.toLocaleDateString()}  ${field.value.toLocaleTimeString()}`
                                                    ) : (
                                                        <span>Selecione a data e horário</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                        </FormControl>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                locale={ptBR}
                                            />
                                            <div className="p-3 border-t border-border">
                                                <TimePickerDemo
                                                    setDate={field.onChange}
                                                    date={field.value}
                                                />
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                    </div>
                    <div className="flex flex-col flex-1 space-y-5">
                        <div className="flex flex-col gap-2 lg:flex-row">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="professor"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Professor *</FormLabel>
                                            <FormControl>
                                                <AgendamentoSelect
                                                    lista={professores}
                                                    onChange={field.onChange}
                                                    error={!!form.formState.errors.professor}
                                                    opcSelecionada={agendamento?.professor}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="estudante"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Estudante *</FormLabel>
                                            <FormControl>
                                                <AgendamentoSelect
                                                    lista={estudantes}
                                                    onChange={field.onChange}
                                                    error={!!form.formState.errors.estudante}
                                                    opcSelecionada={agendamento?.estudante}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="conteudo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Conteúdo *</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Digite o conteúdo do agendamento"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit" className="flex-1 sm:flex-none">Salvar</Button>
                </div>
            </form>
        </Form>
    )
}