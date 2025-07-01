// import {  useState} from 'react';
// import "./App.css";
// import { Tab } from './components/Tab';

// const setList = {
//   Tab1: [1, 2, 3, 4, 5],
//   Tab2: [6, 7, 8, 9, 10],
// };

// export type setListKeys = keyof typeof setList | undefined;

// const appTabs =  Object.keys(setList) as setListKeys[];

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState<setListKeys>("Tab1");
//   return (
//     <div className='main-container'>
//       <div className='tab-container'>
//         {appTabs.map((tab) => (
//           <Tab
//             selectedTab={selectedTab}
//             label={tab}
//             handleClick={setSelectedTab}
//           />
//         ))}
//       </div>
//       <div className="content-container">
//         {setList[selectedTab!].map((item)=>(
//           <div className="content-item">{item}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// import { useState, useMemo, useEffect, useCallback } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import MyComponent from './components/MyComponent';

// function App() {
//   const [count, setCount] = useState<number>(0);
//   const [secondCount, setSecondCount] = useState<number>(0);

//     const myFunction = useCallback(() => {
//     console.log(count);
//   }, [count]);

//   // const myFunction = useCallback(() => {
//   //   console.log(count);
//   // }, [count])

//   // useEffect(() => {
//   //   console.log(count);
//   // }, [count, secondCount]);

//   // const memoTest = useMemo(() => {
//   //   console.log("ejecucion");
//   //   return count;
//   // }, []);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <button onClick={() => setSecondCount((count) => count + 1)}>
//           second count is {secondCount}
//         </button>
//          <button onClick={() => setSecondCount((count) => count + 1)}>
//           second count is {secondCount}
//         </button>
//           My component count{count}
//          <button onClick={myFunction}>
//          execute
//          </button>
//          {count > 10 ? <div>Count es mayor que 10</div> : <div>Count es menor o igual a 10</div>}
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


