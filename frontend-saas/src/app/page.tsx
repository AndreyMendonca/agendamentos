import { CardOption } from "@/components/card-option";
import { Template } from "@/components/template/template";

export default function Home() {
    return (
        <Template>
            <div className="flex flex-col items-center mx-10 mb-10 gap-5 md:flex-row justify-between">
                <CardOption name="Alunos" description="Gerencie todos os cadastros de alunos. Visualize, adicione, edite e remova registros facilmente." route="alunos"/>
                <CardOption name="Professor" description="Área para controle completo dos professores. Permite cadastrar, atualizar e excluir informações." route="professores"/>
                <CardOption name="Agendamentos" description="Visualize e administre todos os agendamentos realizados. Inclui funcionalidades de criação, edição e cancelamento." route="agendamentos"/>
            </div>
        </Template>
    );
}
