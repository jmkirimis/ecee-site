"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!userName || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://ecee-api.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      const result = await res.json();

      if (res.ok) {
        await Cookies.set("token", result.access_token);
        window.location.href = "/painel";
      } else {
        alert(
          result.error ||
            "Erro ao fazer login. Verifique se o usuário e senha estão corretos."
        );
      }
    } catch (error) {
      console.error(error);
      alert("Erro na comunicação com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0da596]">
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img src={"/images/logo-v2.png"} className="w-64" alt="Logo" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="flex flex-col items-center w-full max-w-sm"
        >
          <input
            type="text"
            placeholder="Usuário"
            className="p-3 rounded mb-4 w-full text-zinc-800 border-2 border-zinc-400"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="p-3 rounded mb-4 w-full text-zinc-800 border-2 border-zinc-400 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-zinc-400 hover:cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={28} />
              ) : (
                <AiOutlineEye size={28} />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between w-full px-2">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2 text-zinc-800">
                Lembrar-me
              </label>
            </div>
            <a className="text-[#0da596] underline hover:cursor-pointer">
              Esqueci a senha
            </a>
          </div>

          <button
            type="submit"
            className="bg-[#0da596] text-white font-bold py-3 px-8 my-6 rounded hover:bg-zinc-400 hover:cursor-pointer"
          >
            {loading ? "Carregando..." : "Entrar"}
          </button>

          <span className="text-zinc-800">
            Não possui conta?{" "}
            <a 
              className="text-[#0da596] underline hover:cursor-pointer"
              onClick={() => window.location.href = "/cadastro"}
            >
              Cadastre-se
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}
