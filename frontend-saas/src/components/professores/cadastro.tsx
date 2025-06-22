import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Professor } from "@/app/types/Professor"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Switch } from "../ui/switch"
import { toast } from "sonner"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"
import { useProfessorService } from "@/services/professor.service"


const formSchema = z.object({
    nome: z.string().min(2, "Campo obrigatório"),
    sobrenome: z.string().min(2, "Campo obrigatório"),
    cpf: z.string().min(11, "CPF inválido"),
    nascimento: z.date().optional(),
    especialidade: z.string().optional(),
    status: z.boolean({ required_error: "Campo é obrigatório" })
})

type Props = {
    onOpenChange: (open: boolean) => void;
    updatePage: () => void;
}
export const ProfessorCadastro = ({ onOpenChange, updatePage }: Props) => {
    const [professor, setProfessor] = useState<Professor | null>(null);
    const useService = useProfessorService();
    const [modalCalendario, setModalCalendario] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            sobrenome: "",
            cpf: "",
            especialidade: "",
            status: true,
        },
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await useService.salvar(values)
            toast.success("Sucesso!", {
                description: "Professor cadastrado com sucesso",
            })
            updatePage();
            onOpenChange(false);
        } catch (error: any) {
            toast.error("Erro!", {
                description: error.message,
            });
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
                <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome *</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    placeholder="Digite o nome"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="sobrenome"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sobrenome *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite o sobrenome"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>CPF *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite o CPF"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="nascimento"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Data de nascimento</FormLabel>
                            <Popover open={modalCalendario} onOpenChange={setModalCalendario}>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                field.value.toLocaleDateString()
                                            ) : (
                                                <span>Selecione a data</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={(date) => {
                                            field.onChange(date);
                                            setModalCalendario(false);
                                        }}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        captionLayout="dropdown"
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="especialidade"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Especialidade</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite a especialidade"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Status</FormLabel>
                            <div className="flex gap-4">
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormDescription>{field.value ? "Ativo" : "Inativo"}</FormDescription>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Button type="submit" className="flex-1 md:flex-none">Salvar</Button>
                </div>

            </form>
        </Form>
    )
}