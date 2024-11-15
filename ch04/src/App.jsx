import "./App.css";
import UseCallbackComponent from "./components/useCallbackComponent";
import UseCounterComponent from "./components/UseCounterComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseMemoComponent from "./components/UseMemoComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";

/*

  날짜 : 2024/11/12
  이름 : 황수빈
  내용 : ch04. React Hooks

*/

function App() {
  return (
    <>
      <h3>ch04.react hooks</h3>

      <h4>- useRef() </h4>
      <UseRefComponent />
      <UseRefComponent />

      <h4>- useState()</h4>
      <UseStateComponent />

      <h4>- useReducer()</h4>
      <UseReducerComponent />

      <h4>- useEffect()</h4>
      <UseEffectComponent />

      <h4>- useMemo()</h4>
      <UseMemoComponent />

      <h4>- useCallback()</h4>
      <UseCallbackComponent />

      <h4>- Custom Hook()</h4>
      <UseCounterComponent />
    </>
  );
}

export default App;