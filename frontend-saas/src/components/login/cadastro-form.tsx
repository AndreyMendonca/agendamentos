import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

const formSchema = z.object({
    email: z.string({ required_error: "Campo é obrigatorio" }).email("Email não é válido"),
    password: z.string({ required_error: "Campo é obrigatorio" }).min(2, "Campo é obrigatorio"),
    nome: z.string({ required_error: "Campo é obrigatorio" }).min(2, "Campo é obrigatorio")
})

type Props = {
    onClick: () => void;
}

export const CadastroForm = ({ onClick }: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            nome: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email *</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoFocus
                                            placeholder="email@exemplo.com"
                                            {...field}
                                            autoComplete="off"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Senha *</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Digite sua senha"
                                            {...field}
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome completo</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Digite seu nome *"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Button type="submit" className="w-full">
                            Cadastrar
                        </Button>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    <a onClick={onClick} href="#" className="underline underline-offset-4">
                        Voltar
                    </a>
                </div>
            </form>
        </Form>
    )
}