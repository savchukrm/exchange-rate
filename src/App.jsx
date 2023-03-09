import { useEffect, useState } from 'react';

import { compareRate } from './compareRate';

import Conver from './components/Convert';

import './App.css';

function App() {
  const [actualUSD, setActualUSD] = useState(0);
  const [actualEUR, setActualEUR] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const rateUSD = await compareRate('USD');
      setActualUSD(rateUSD.conversion_rate.toFixed(2));

      const rateEUR = await compareRate('EUR');
      setActualEUR(rateEUR.conversion_rate.toFixed(2));
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-row">
            <h1>exchange rates</h1>
            <div className="exchange-rate">
              USD/UAH: {actualUSD} | EUR/UAH: {actualEUR}
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <Conver />
        </div>
      </main>
    </div>
  );
}

export default App;
