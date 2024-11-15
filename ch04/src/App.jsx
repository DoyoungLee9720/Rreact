import './App.css'
import UseCallbackComponent from './assets/components/UseCallbackComponent';
import UseCounterComponent from "./assets/components/UseCounterComponent";
import UseEffectComponent from './assets/components/UseEffectComponent';
import UseMemoComponent from './assets/components/UseMemoComponent';
import UseReducerComponent from './assets/components/UseReducerComponent';
import UseRefComponent from './assets/components/UseRefComponent';
import UseStateComponent from './assets/components/UseStateComponent';
/*
  날짜 : 2024/11/12
  이름 : 이도영
  내용 : ch04.리엑트 훅
 */ 
function App() {
  return (
    <>
      <h3>ch04.react hooks</h3>
      <h4>useRef()</h4>
      <UseRefComponent />

      <h4>useState()</h4>
      <UseStateComponent />

      <h4>useReducer()</h4>
      <UseReducerComponent />

      <h4>useEffect()</h4>
      <UseEffectComponent />

      <h4>useMemo()</h4>
      <UseMemoComponent/>
      <h4>useCallback()</h4>
      <UseCallbackComponent/>
      <h4>Custom Hook()</h4>
      <UseCounterComponent/>
    </>
  );
}

export default App
