import { useState } from "react";

export default function Pai() {
  const [qtd, setQtd] = useState(0);

  function contar() {
    setQtd(qtd + 1);
  }

  function resetar() {
    setQtd(0);
  }

  return (
    <div className="container">
      <h1> Contador </h1>
      <div> {qtd} </div>
      <button onClick={contar}> Count </button>

      <Filho resetar={resetar} />
    </div>
  );
}

function Filho(props) {
  function reset() {
    props.resetar();
  }

  return (
    <div className="container">
      <button onClick={reset}> Reset </button>
    </div>
  );
}
