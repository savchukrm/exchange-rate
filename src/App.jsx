import { useEffect, useState } from 'react';
import './App.css';
import { gettingRate } from './gettingRate';

function App() {
  const [actualUSD, setActualUSD] = useState(0);
  const [actualEUR, setActualEUR] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const rateEUR = await gettingRate('EUR', 'UAH', 1);
      setActualEUR(rateEUR);

      const rateUSD = await gettingRate('USD', 'UAH', 1);
      setActualUSD(rateUSD);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-row">
            <h1>Exchange rates</h1>
            <div className="exchange-rate">
              USD/UAH: {actualUSD.new_amount} | EUR/UAH: {actualEUR.new_amount}
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container"></div>
      </main>
    </div>
  );
}

export default App;
