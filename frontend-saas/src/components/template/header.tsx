import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { Logo } from "./logo"
import { ButtonOptions } from "./button-options"
import { ThemeToggle } from "../theme-toogle"
import { Separator } from "../ui/separator"

export const Header = () => {
    return (
        <header className="py-3">
            <div className="container mx-auto flex items-center">
                <div className="flex justify-between w-full">
                    <div className="flex items-center">
                        <Logo />
                        <NavigationMenu className="hidden md:block">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="alunos">Alunos</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="professores">Professores</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="agendamentos">Agendamentos</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex gap-3">
                        <ThemeToggle/>
                        <ButtonOptions />
                    </div>
                </div>
            </div>
            <Separator className="my-4"/>
        </header>
    )
}
