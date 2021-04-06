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
    newtonRalph: { title: "Método Newthon Ralph", function: "x^3 - cos(x)" },
    bisection: { title: "Método da Bissecção", function: "x * log(x) -1" },
    fixedPoint: {
      title: "Método das Aproximações Sucessivas",
      function: "x * E^x - 2"
    },
    secant: { title: "Método da Secante", function: "√x - 5 * E ^-x" }
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
        {Object.values(state).map(
          ({ title, function: f, result, index }: any) => (
            <>
              <h2>{title}</h2>
              <div className={"resultContainer"}>
                <div className={"result"}>
                  <div className={"label"}>Função:</div>
                  <span>{f}</span>
                </div>
                <div className={"result"}>
                  <div className={"label"}>Raiz:</div>
                  <span>{result ? result.toFixed(3) : "Não Converge "}</span>
                </div>
                <div className={"result"}>
                  <div className={"label"}>N° de Iterações:</div>
                  <span>{index}</span>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}
