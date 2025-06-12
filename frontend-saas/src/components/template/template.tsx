"use client"
import { ReactNode } from "react"
import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
    children: ReactNode;
}
export const Template = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow contianer mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}




