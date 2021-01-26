// useState
import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
// useEffect
import { TimerPadre } from './components/TimerPadre';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr className="mt-4"/>

      <h2>useState</h2>
      <Counter />

      <Usuario />
      <hr className="mt-5"/>

      <h2>useEffect - useRef</h2>
      <TimerPadre />

    </>
  );
}

export default App;
