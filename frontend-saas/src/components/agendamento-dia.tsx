import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableCaption, TableHead, TableHeader, TableRow } from "./ui/table";

export const AgendamentoDia = () => {
    const hoje = new Date();
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>Agendamentos do dia</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>{hoje.toLocaleDateString()}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Horário</TableHead>
                            <TableHead>Professor</TableHead>
                            <TableHead>Estudante</TableHead>
                            <TableHead>Whatsapp</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </CardContent>
        </Card>
    )
};