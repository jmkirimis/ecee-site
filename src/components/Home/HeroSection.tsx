export default function HeroSection() {
  return (
    <div
      className={`
        bg-[url('/images/background.jpg')] bg-cover bg-center bg-no-repeat bg-black/40 bg-blend-overlay
        flex flex-col items-center justify-center min-h-screen 
        font-[family-name:var(--font-geist-sans)]`
      }
    >
      <div className="w-5xl flex items-start justify-end gap-5">
        <button className="bg-[#0da596] p-3 rounded-xl font-semibold text-white">
          Área do aluno
        </button>
      </div>

      <div className="flex flex-col justify-center items-center w-2xl gap-6">
        <img src={"/images/logo.png"} className="w-80" alt="Logo" />
        <p className="text-center text-lg text-white">
          "A mística cristã é nossa herança e se faz em direito de todo cristão
          no avançar da jornada de conhecimento sobre Evangelho, porque aquilo
          que o Cristo nos trouxe é de extrema importância para nossa evolução."
          Mar Shimoda
        </p>
        <button className="bg-[#0da596] p-3 rounded-xl font-semibold text-white">
          Inscrever-se
        </button>
        <iframe
          src="https://www.youtube.com/embed/8mrQgjsjCts"
          width={500}
          height={280}
          allowFullScreen
        />
      </div>
    </div>
  );
}
