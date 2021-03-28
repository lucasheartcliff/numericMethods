import "./styles.css";
import {} from "./methods";
import { useEffect, useState } from "react";
import produce from "immer";

export default function App() {
  const [state, setState] = useState({
    newtonRalph: { title: "Método Newthon Ralph" },
    bisection: { title: "Método da Bissecção" },
    fixedPoint: { title: "Método das Aproximações Sucessivas" },
    secant: { title: "Método da Secante" }
  })

  useEffect(() => {
    setState(produce(state => {
      state.newtonRalph = { ...state.newtonRalph }
      state.bisection = { ...state.bisection }
      state.fixedPoint = { ...state.fixedPoint }
      state.secant = { ...state.secant }
    }))
  },[])

  return (
    <div className="App">
      <div className={"container"}>
        <h2>Método Newton Ralph</h2>
        <div className={"resultContainer"}>
          <div className={"result"}>
            <div className={"label"}>Função:</div>
            <span>abcde</span>  
          </div>
          <div className={"result"}>
            <div className={"label"}>Resultado:</div>
            <span>abcde</span>
          </div>
          <div className={"result"}>
            <div className={"label"}>N° de Iterações:</div>
            <span>abcde</span>
          </div>
        </div>
      </div>
    </div>
  );
}
