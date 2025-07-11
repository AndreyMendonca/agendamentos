import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { format, set } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
    data: z.date({
        required_error: "Selecione uma data",
    }),
})

type Props = {
    filtro: (dia: Date) => void;
    setDataFiltro: (data:Date) => void
}

export const AgendamentoFormData = ({filtro, setDataFiltro}:Props) => {
    const [modalCalendario, setModalCalendario] = useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            data: new Date(),
        }
    });
    
    return (
        <Form {...form} >
            <form className="space-y-8 max-w-sm">
                <FormField
                    control={form.control}
                    name="data"
                    render={({ field }) => (
                        <FormItem>
                            <Popover open={modalCalendario} onOpenChange={setModalCalendario}>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "pl-3 text-left font-semibold",
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
                                            filtro(date!);
                                            setDataFiltro(date!);
                                        }}
                                        disabled={(date) =>
                                            date < new Date("1900-01-01")
                                        }
                                        captionLayout="dropdown"
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                            <FormDescription>
                                Selecione uma data para filtrar os agendamentos.
                            </FormDescription>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}