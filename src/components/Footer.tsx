import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <div
        className="
            flex flex-col bg-[#0da596] justify-center items-center gap-8 pt-8 pb-8 
            md:flex-row md:items-start md:gap-[12%] md:pb-20
            lg:p-16
        "
      >
        <img src={"/images/logo.png"} className="w-80" alt="Logo" />

        <div className="flex gap-14 md:gap-28">
          <div className="text-white md:text-xl">
            <h1 className="font-bold">Mídias Sociais</h1>
            <div
              className="
                    flex flex-col items-center mt-4 gap-2 
                    md:gap-4 md:mt-8 md:items-start
                "
            >
              <a href="#" className="flex gap-2 items-center hover:underline">
                <FaInstagram />
                Instagram
              </a>
              <a href="#" className="flex gap-2 items-center hover:underline">
                <FaWhatsapp />
                Whatsapp
              </a>
              <a href="#" className="flex gap-2 items-center hover:underline">
                <IoMailOutline />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
