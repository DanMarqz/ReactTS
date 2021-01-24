import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr className="mt-4"/>

      <Counter />

      <hr className="mt-5"/>

      <Usuario />

    </>
  );
}

export default App;
