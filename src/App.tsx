import "./styles.css";
import * as m from "./methods";
import {
  newthonExample,
  bisectionExample,
  fixedPointExample,
  secantExample
} from "./example";
import { useEffect, useState } from "react";
import produce from "immer";

export default function App() {
  const [state, setState] = useState({
    newtonRalph: { title: "Método Newthon Ralph" },
    bisection: { title: "Método da Bissecção" },
    fixedPoint: { title: "Método das Aproximações Sucessivas" },
    secant: { title: "Método da Secante" }
  });

  useEffect(() => {
    setState(
      produce((state) => {
        state.newtonRalph = {
          ...state.newtonRalph,
          ...m.newtonRalph(newthonExample)
        };
        state.bisection = {
          ...state.bisection,
          ...m.bisection(bisectionExample)
        };
        state.fixedPoint = {
          ...state.fixedPoint,
          ...m.fixedPoint(fixedPointExample)
        };
        state.secant = { ...state.secant, ...m.secant(secantExample) };
      })
    );
  }, []);

  return (
    <div className="App">
      <div className={"container"}>
        {Object.values(state).map(({ title, result, index }: any) => (
          <>
            <h2>{title}</h2>
            <div className={"resultContainer"}>
              {/* <div className={"result"}>
                <div className={"label"}>Função:</div>
                <span>{result.toFixed(3)}</span>
              </div> */}
              <div className={"result"}>
                <div className={"label"}>Raiz:</div>
                <span>{result ? result.toFixed(3) : "Não Converge "}</span>
                {/* <span>{index}</span> */}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
