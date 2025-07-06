import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableCaption, TableHead, TableHeader, TableRow } from "./ui/table";

export const AulasRealizadas = () => {
    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <CardTitle>Histórico das últimas aulas realizadas</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>Últimas 10 aulas concluidas</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Data</TableHead>
                            <TableHead>Professor</TableHead>
                            <TableHead>Estudante</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </CardContent>
        </Card>
    )
};