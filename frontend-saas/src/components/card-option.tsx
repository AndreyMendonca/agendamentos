import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
    name: string;
    description: string;
    route: string;
}

export const CardOption = ({name, description, route}:Props) =>{
    return(
        <Card className="w-full max-w-md shadow-2xl">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Link href={route}>
                    <Button className="cursor-pointer">Acessar</Button>
                </Link>
            </CardContent>
        </Card>
    )
}