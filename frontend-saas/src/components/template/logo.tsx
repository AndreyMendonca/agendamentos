import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="text-xl mx-10 md:mx-4">Agendamento<span className="font-bold">Flix</span></div>
        </Link>
    );
}