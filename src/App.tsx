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
  );
}

export default App;
