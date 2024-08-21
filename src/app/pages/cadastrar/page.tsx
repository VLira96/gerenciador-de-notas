import AddUserForm from "@/components/add-user-form";
import SideHome from "@/components/sideHome";

const Cadastrar = () => {
    return (
        <div className="flex items-center mt-24 mx-80 bg-zinc-700 py-12">
            <SideHome title="Já fez o cadastro?" paragraph="Se você já tem uma conta, clique no" strong="botão abaixo para entrar" buttonMsg="ENTRAR" path="/pages/logar" />
            <main className="flex justify-center w-2/3">
                <AddUserForm />
            </main>
        </div>
    );
}

export default Cadastrar;