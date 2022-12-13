import React from 'react';
import CurrencyToBuy from './components/CurrencyToBuy/CurrencyToBuy';
import MyCurrency from './components/MyCurrency/MyCurrency';

function App() {
  return (
    <div className="App">
      <MyCurrency />
      <CurrencyToBuy />
    </div>
  );
}

export default App;
