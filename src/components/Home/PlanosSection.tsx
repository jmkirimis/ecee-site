export default function PlanosSection() {
  return (
    <div
      id="planos"
      className="bg-white min-h-screen flex flex-col items-center py-16 px-4"
    >
      <h1 className="text-[#ad9970] text-3xl md:text-4xl font-black mb-10">
        PLANOS
      </h1>

      <p className="text-zinc-800 text-lg mb-16 max-w-2xl text-center">
        Compare nossos planos e veja qual se encaixa melhor para você!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Plano Básico */}
        <div className="w-full border-2 border-zinc-200 rounded-2xl shadow-sm p-8 flex flex-col items-center hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-8 text-zinc-600">Básico</h2>
          <p className="text-4xl font-bold text-[#0da596] mb-6">
            R$50
            <span className="text-lg font-bold text-[#0da596] ml-0.5">
              /mês
            </span>
          </p>
          <ul className="flex-1 space-y-3 text-zinc-600 mb-6">
            <li>✔ Acesso às aulas gravadas</li>
            <li>✔ Acesso às aulas semanais</li>
            <li>✔ Acesso ao material de apoio </li>
          </ul>
          <button className="w-full bg-[#0da596] text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
            Assinar
          </button>
        </div>

        {/* Plano Intermediário (Destaque) */}
        <div className="w-full border-2 border-[#0da596] rounded-2xl shadow-lg p-8 flex flex-col items-center bg-cyan-50 relative">
          <span className="absolute -top-4 px-4 py-1 bg-[#0da596] text-white text-sm rounded-full">
            Mais Popular
          </span>
          <h2 className="text-xl font-bold mb-8 text-zinc-600">
            Intermediário
          </h2>
          <p className="text-4xl font-bold text-[#0da596] mb-6">
            R$80
            <span className="text-lg font-bold text-[#0da596] ml-0.5">
              /mês
            </span>
          </p>
          <ul className="flex-1 space-y-3 text-zinc-600 mb-6">
            <li>✔ Acesso às aulas gravadas</li>
            <li>✔ Acesso às aulas semanais</li>
            <li>✔ Acesso ao material de apoio </li>
            <li>✔ Recursos exclusivos </li>
          </ul>
          <button className="w-full bg-[#0da596] text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
            Assinar
          </button>
        </div>

        {/* Plano Premium */}
        <div className="w-full border-2 border-zinc-200 rounded-2xl shadow-sm p-8 flex flex-col items-center hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-8 text-zinc-600">Premium</h2>
          <p className="text-4xl font-bold text-[#0da596] mb-6">
            R$100
            <span className="text-lg font-bold text-[#0da596] ml-0.5">
              /mês
            </span>
          </p>
          <ul className="flex-1 space-y-3 text-zinc-600 mb-6">
            <li>✔ Acesso às aulas gravadas</li>
            <li>✔ Acesso às aulas semanais</li>
            <li>✔ Acesso ao material de apoio </li>
            <li>✔ Recursos exclusivos </li>
            <li>✔ Encontros presenciais </li>
          </ul>
          <button className="w-full bg-[#0da596] text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
            Assinar
          </button>
        </div>
      </div>
    </div>
  );
}
