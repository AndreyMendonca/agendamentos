'use client'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Estudante } from "@/types/Estudante";
import { toast } from "sonner";

const formSchema = z.object({
    cpf: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    nome: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    sobrenome: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    nascimento: z.date().optional(),
    cep: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    logradouro: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    numeroCasa: z.number(),
    bairro: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    estado: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    cidade: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    telefone: z.string().optional(),
    whatsapp: z.string({required_error: "campo é obrigatório" }).min(2, "Campo obrigatório"),
    email: z.string().optional(),
})

type Props = {
    onOpenChange: (open: boolean) => void;
    updatePage: () => void;
    save: (estudante: Estudante) => void;
}
export const AlunoCadastro = ({ onOpenChange, updatePage, save }: Props) => {
    const [estudante, setEstudante] = useState<Estudante | null>(null)
    const [modalCalendario, setModalCalendario] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            sobrenome: "",
            cpf: "",
            cep: "",
            logradouro: "",
            bairro: "",
            estado: "",
            cidade: "",
            telefone: "",
            whatsapp: "",
            email: "",
            nascimento: undefined,
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            await save(values);
            onOpenChange(false);
            updatePage();
        }catch(error: any){
             toast.error("Erro!",{
                description: error.message
            });
        }
       
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4" noValidate>
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
                                    placeholder="Digite o CEP"
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
                    name="cep"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>CEP *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite o CEP"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="logradouro"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Endereço *</FormLabel>
                            <FormControl>
                                <Input
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
                    name="numeroCasa"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Número *</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Digite o nome"
                                    {...field}
                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                    value={field.value ?? ""}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bairro"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bairro *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite o bairro"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="estado"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estado *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite o estado"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cidade"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cidade *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite a cidade"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite o telefone"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Whatsapp *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite o whatsapp"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Digite o whatsapp"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Button type="submit" className="flex-1 cursor-pointer sm:flex-none">Salvar</Button>
                </div>
            </form>
        </Form>
    )
}
