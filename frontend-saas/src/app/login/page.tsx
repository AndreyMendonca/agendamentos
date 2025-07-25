import { LoginForm } from "@/components/login/login-form";
import { PageLogin } from "@/components/login/page-login";

const Page = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <PageLogin />
            </div>
        </div>
    );
}

export default Page;