export default function CallToAction() {
  return (
    <div className="relative w-full p-10 text-center text-white bg-[url('/images/cta3.jpg')] bg-cover bg-center bg-fixed">
      {/* Camada escura */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo acima da camada escura */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Venha conosco nessa caminhada!</h2>
        <p className="text-lg mt-4">
          Se você busca segurança não apenas física, mas também emocional e
          espiritual, nossa equipe está pronta para acolhê-lo e apoiá-lo em
          todas as etapas.
        </p>
        <a href="#planos">
          <button className="mt-6 px-6 py-3 bg-[#0da596] text-white font-bold rounded-full hover:bg-gray-400 transition">
            Ver Planos
          </button>
        </a>
      </div>
    </div>
  );
}
