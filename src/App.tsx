import React from 'react';
import './App.css';
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { ScoreBanner } from './components/ScoreBanner';

interface AppProps {
  [x: string]: string;
}
export const App: React.FC<AppProps> = ({
}) => {
  return (

    <NextUIProvider>
      <ScoreBanner/>
    </NextUIProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
