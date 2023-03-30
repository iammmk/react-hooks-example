import logo from "./logo.svg";
import "./App.css";
import UseEffectPractice from "./Components/UseEffectPractice";
import Comp1 from "./Components/UseContextPractice.js/Comp1";
import Shop from "./Components/RtkPractice/Shop";
import UseReducerPractice from "./Components/UseReducerPractice";
import UseMemoPractice from "./Components/UseMemoPractice";
import Home from "./Components/UseCallbackPractice/Home";

function App() {
  return (
    <>
      <h1>useEffect</h1>
      <UseEffectPractice />
      <h1>useContext</h1>
      <Comp1 />
      <h1>react-toolkit(with useRef)</h1>
      <Shop />
      <h1>useReducer</h1>
      <UseReducerPractice />
      <h1>useMemo</h1>
      <UseMemoPractice />
      <h1>useCallback</h1>
      <Home />
    </>
  );
}

export default App;
