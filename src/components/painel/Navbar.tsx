"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaSignOutAlt, FaBook, FaVideo } from "react-icons/fa";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { RiArticleFill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } flex flex-col p-4`}
      >
        {/* Botão de toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-4 p-2 rounded-md hover:bg-gray-700 transition self-end"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Logo / Título */}
        {isOpen && <h1 className="text-2xl font-bold mb-6">Painel</h1>}

        {/* Links */}
        <nav className="flex flex-col gap-4">
          <a
            href="#"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md transition text-sm"
          >
            <FaHome size={20} />
            {isOpen && "Dashboard"}
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md transition text-sm"
          >
            <FaUser size={20} />
            {isOpen && "Usuários"}
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md transition text-sm"
          >
            <FaVideo size={20} />
            {isOpen && "Aulas"}
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md transition text-sm"
          >
            <PiArticleNyTimesFill size={20} />
            {isOpen && "Posts"}
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md transition text-sm"
          >
            <FaBook size={20} />
            {isOpen && "Glossário"}
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md transition text-sm"
          >
            <FaSignOutAlt size={20} />
            {isOpen && "Sair"}
          </a>
        </nav>
      </aside>
    </div>
  );
}
