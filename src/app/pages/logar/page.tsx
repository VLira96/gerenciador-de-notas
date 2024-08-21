import SideHome from "@/components/sideHome";

const Logar = () => {
    return (
        <div className="flex items-center mt-24 mx-80 bg-zinc-700 py-12">
            <SideHome title="Não se cadastrou ainda?" paragraph="Se você não tem uma conta, clique no" strong="botão abaixo para cadastrar" buttonMsg="CADASTRAR" path="/pages/cadastrar" />
            <main className="flex justify-center w-2/3">

            </main>
        </div>
    );
}

export default Logar;