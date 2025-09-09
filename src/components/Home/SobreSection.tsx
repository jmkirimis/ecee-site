import { FaChurch } from "react-icons/fa";
import { FaBible } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function SobreSection() {
  return (
    <div className="bg-cyan-50 pt-16 pb-20 flex flex-col items-center gap-10">
      <h1 className="text-[#ad9970] text-3xl font-black">SOBRE O MAR</h1>
      <div className="flex gap-20 items-center justify-center mt-12 mb-12">
        <img
          src={"/images/foto-mar.jpeg"}
          className="w-80 rounded-3xl"
          alt="Logo"
        />
        <div className="flex flex-col gap-8 text-zinc-800 text-xl">
          <div className="flex items-center gap-4">
            <FaUser size={40} color="#0da596" />
            <span>Nascido em Piedade/SP</span>
          </div>
          <div className="flex items-center gap-4">
            <FaChurch size={40} color="#0da596" />
            <span>Ordenado Sacerdote em 2000</span>
          </div>
          <div className="flex items-center gap-4">
            <FaBible size={40} color="#0da596" />
            <span>Professor de Teologia</span>
          </div>
          <div className="flex items-center gap-4">
            <FaCity size={40} color="#0da596" />
            <span>Reside atualmente em Registro/SP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
