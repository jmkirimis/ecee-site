import { PiChalkboardTeacherFill } from "react-icons/pi";
import { TbVocabulary } from "react-icons/tb";
import { RiLiveFill } from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { JSX } from "react";

interface Props {
  icon: string;
  titulo: string;
  desc: string;
}

const iconMap: Record<string, JSX.Element> = {
  video: <MdVideoLibrary size={45} color="#fff" />,
  live: <RiLiveFill size={45} color="#fff" />,
  whatsapp: <IoLogoWhatsapp size={45} color="#fff" />,
  presentation: <PiChalkboardTeacherFill size={45} color="#fff" />,
  glossary: <TbVocabulary size={45} color="#fff" />,
};

export default function ConteudoCard(props: Props) {
  return (
    <div
      className="
            flex flex-col w-[90%] items-center text-center rounded-xl gap-4 
            md:w-72 
            lg:w-[360px] 
            xl:w-96 2xl:w-[420px]
        "
    >
      <div className="flex w-20 h-20 items-center justify-center rounded-full bg-[#0da596]">
        {iconMap[props.icon] || <MdVideoLibrary size={45} color="#fff" />}
      </div>
      <h1 className="text-xl font-bold">{props.titulo}</h1>
      <p className="text-center">{props.desc}</p>
    </div>
  );
}
