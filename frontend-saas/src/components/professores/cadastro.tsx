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


const formSchema = z.object({
    nome: z.string().min(2, "Campo obrigatório"),
    sobrenome: z.string().min(2, "Campo obrigatório"),
    especialidade: z.string().optional(),
    status: z.boolean({ required_error: "Campo é obrigatório" })
})

export const ProfessorCadastro = () => {
    const [professor, setProfessor] = useState<Professor | null>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            sobrenome: "",
            especialidade: "",
            status: true,
        },
    })
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
        const id = toast("Sucesso!", {
            description: "Professor cadastrado com sucesso",
            action: {
                label: 'Fechar',
                onClick: () => {
                    toast.dismiss(id);
                }
            }
        })
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