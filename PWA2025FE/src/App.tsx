import { useState, useMemo, useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MyComponent from './components/MyComponent';

function App() {
  const [count, setCount] = useState<number>(0);
  const [secondCount, setSecondCount] = useState<number>(0);

    const myFunction = useCallback(() => {
    console.log(count);
  }, [count]);

  // const myFunction = useCallback(() => {
  //   console.log(count);
  // }, [count])

  // useEffect(() => {
  //   console.log(count);
  // }, [count, secondCount]);

  // const memoTest = useMemo(() => {
  //   console.log("ejecucion");
  //   return count;
  // }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setSecondCount((count) => count + 1)}>
          second count is {secondCount}
        </button>
         <button onClick={() => setSecondCount((count) => count + 1)}>
          second count is {secondCount}
        </button>
          My component count{count}
         <button onClick={myFunction}>
         execute
         </button>
         {count > 10 ? <div>Count es mayor que 10</div> : <div>Count es menor o igual a 10</div>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
