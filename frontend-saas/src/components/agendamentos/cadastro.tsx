import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
    dataAgendamento: z.date(),
    professor: z.number(),
    aluno: z.number(),
    conteudo: z.string().min(2, "Campo Obrigatório")
})

type Props = {
    onOpenChange: (open: boolean) => void;
}

export const AgendamentoCadastro = ({ onOpenChange }: Props) => {
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
                    <div className="flex-1 border-4">
                        ...
                    </div>
                    <div className="flex flex-col p-2 flex-1 gap-2 border-4">
                        <div className="flex gap-2">
                            <div className="flex-1 border-2">
                                ...
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