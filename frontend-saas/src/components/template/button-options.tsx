"use client"

import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleUser, Menu } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

export const ButtonOptions = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="mr-10 md:mr-4">
                    <CircleUser className="hidden md:block"/>
                    <Menu className="block md:hidden"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="block md:hidden"><Link href="estudantes">Estudantes</Link></DropdownMenuItem>
                <DropdownMenuItem className="block md:hidden"><Link href="professores">Professores</Link></DropdownMenuItem>
                <DropdownMenuItem className="block md:hidden"><Link href="agendamentos">Agendamentos</Link></DropdownMenuItem>
                < DropdownMenuSeparator className="block md:hidden"/>
                <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
