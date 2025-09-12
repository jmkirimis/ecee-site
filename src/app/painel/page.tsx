import Navbar from "@/components/painel/Navbar";

export default function Painel() {
    return (
        <div className="flex">
            <Navbar />
            <main className="flex-1 p-6 bg-white text-zinc-800">
                <div className="p-6">
                    {/* Boas-vindas */}
                    <h1 className="text-2xl font-bold mb-4">Bem-vindo de volta, João 👋</h1>
                </div>
            </main>
        </div>
    );
}