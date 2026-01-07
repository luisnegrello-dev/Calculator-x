import React, { useState } from "react";
import logo from "./download.png"; // sua logo
import "./index.css";


function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const coefA = parseFloat(a);
    const coefB = parseFloat(b);
    const coefC = parseFloat(c);

    if (isNaN(coefA) || isNaN(coefB) || isNaN(coefC)) {
      setResultado("Por favor, preencha todos os valores.");
      return;
    }

    if (coefA === 0) {
      setResultado("Erro: o coeficiente 'a' deve ser diferente de 0.");
      return;
    }

    const delta = Math.pow(coefB, 2) - 4 * coefA * coefC;
    let mensagem = "Cálculo da Fórmula de Bhaskara:\n\n";
    mensagem += `Coeficiente A: ${coefA}\nCoeficiente B: ${coefB}\nCoeficiente C: ${coefC}\n\n`;
    mensagem += `Delta = b² - 4ac\n`;
    mensagem += `Delta = ${coefB}² - 4*${coefA}*${coefC}\n`;
    mensagem += `Delta = ${delta}\n\n`;

    if (delta > 0) {
      const x1 = (-coefB + Math.sqrt(delta)) / (2 * coefA);
      const x2 = (-coefB - Math.sqrt(delta)) / (2 * coefA);
      mensagem += `Raízes reais distintas:\n`;
      mensagem += `x1 = ${x1.toFixed(2)}\n\n`;
      mensagem += `x2 = ${x2.toFixed(2)}\n\n`;
    } else if (delta === 0) {
      const x = -coefB / (2 * coefA);
      mensagem += `Raiz única:\n`;
      mensagem += `x = ${x}\n`;
    } else {
      mensagem += `Equação não possui raízes reais. `;
    }

    setResultado(mensagem);
  };

  const limpar = () => {
    setA("");
    setB("");
    setC("");
    setResultado("");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-mono text-center pt-24">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 p-5 flex items-center gap-5 z-50">
        <img src={logo} alt="logo" className="w-36 h-10 object-contain" />
        <span className="text-yellow-300 font-bold text-lg">Fórmula de Bhaskara</span>
      </nav>

      {/* Box */}
      <div className="bg-black bg-opacity-60 text-white p-10 rounded-xl w-11/12 md:w-2/3 lg:w-1/2 mx-auto mt-32">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Digite o valor a"
          className="w-full p-4 rounded-lg mb-4 text-black text-lg focus:outline-none"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Digite o valor b"
          className="w-full p-4 rounded-lg mb-4 text-black text-lg focus:outline-none"
        />
        <input
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="Digite o valor c"
          className="w-full p-4 rounded-lg mb-4 text-black text-lg focus:outline-none"
        />

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={calcular}
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition"
          >
            Calcular
          </button>
          <button
            onClick={limpar}
            className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Limpar
          </button>
        </div>

        <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg text-green-400 text-left whitespace-pre-line text-base">
          {resultado}
        </div>
      </div>
    </div>
  );
}

export default App;