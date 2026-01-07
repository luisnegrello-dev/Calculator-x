import React, { useState } from "react";
import logo from "./download.png"; // ou seu download.png
import "./index.css"; // vamos colocar os estilos aqui

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
      mensagem += `x1 = -b + √delta / 2 * a\n\n`
      mensagem += `x2 = -b - delta / 2 * a\n\n`
      mensagem += `x1 = -(${coefB}) + √${delta} / 2 * ${coefA}\n\n`
      mensagem += `x2 = -(${coefB}) - √${delta} / 2 * ${coefA}\n\n`
      mensagem += `x1 = ${x1.toFixed(2)}\n\n`;
      mensagem += `x2 = ${x2.toFixed(2)}\n\n`;
    } else if (delta === 0) {
      const x = -coefB / (2 * coefA);
      mensagem += `Raiz única:\n`;
      mensagem += `x = ${x}\n`;
    } else {
      mensagem += `Equação não possui raízes reais.`;
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
    <div className="body">
      <nav className="nav">
        <img src={logo} alt="logo" className="nav-logo" />
        <span className="nav-title">Fórmula de Bhaskara</span>
      </nav>

      <div className="box">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Digite o valor a"
          className="input"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Digite o valor b"
          className="input"
        />
        <input
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="Digite o valor c"
          className="input"
        />

        <button onClick={calcular} className="button">Calcular</button>
        <button onClick={limpar} className="button limpar">Limpar</button>

        <div className="resultado">{resultado}</div>
      </div>
    </div>
  );
}

export default App;