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
                <DropdownMenuItem className="block md:hidden">Alunos</DropdownMenuItem>
                <DropdownMenuItem className="block md:hidden">Professores</DropdownMenuItem>
                <DropdownMenuItem className="block md:hidden">Agendamentos</DropdownMenuItem>
                < DropdownMenuSeparator className="block md:hidden"/>
                <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
