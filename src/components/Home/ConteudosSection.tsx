import ConteudoCard from "./ConteudoCard";

export default function SectionConteudos() {
  return (
    <div
      className={`
            flex flex-col bg-white items-center pt-12 pb-12 
            lg:p-16 lg:justify-center
            text-black
        `}
    >
      <h1 className="text-[#ad9970] text-3xl font-black">CONTEÚDOS</h1>
      <div
        className="
            flex flex-wrap justify-center items-center gap-12 mt-12 mb-8 
            md:gap-16 md:mt-16
        "
      >
        <ConteudoCard
          icon="video"
          titulo="Aulas e Posts"
          desc="A nossa escola ja conta com um vasto acervo de vídeoaulas e áudios para voce 
                entender tudo sobre o Cristianismo místico."
        />
        <ConteudoCard
          icon="live"
          titulo="Lives Semanais"
          desc="Os membros da escola tem acesso a lives semanais para se aprofundarem cada vez 
                mais na espiritualidade e Cristianismo Místico."
        />
        <ConteudoCard
          icon="presentation"
          titulo="Reuniões presenciais"
          desc="São realizados encontros presenciais entre os membors, para abordar e 
                aprofundar assuntos específicos, além de tirar dúvidas."
        />
        <ConteudoCard
          icon="whatsapp"
          titulo="Grupo de Whatsapp"
          desc="Temos um grupo no Whatsapp onde os membros podem entrar e tirar suas dúvidas, 
                além de compartilharem suas experiências e feedback sobre o conteúdo."
        />
        <ConteudoCard
          icon="glossary"
          titulo="Glossário"
          desc="Todos os membros possuem acesso a um glossário amplo de palavras que eram utilizadas na época."
        />
      </div>
    </div>
  );
}
