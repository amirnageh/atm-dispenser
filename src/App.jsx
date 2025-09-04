import { useState } from "react";
import DispenserButton from "./DispenserButton";
import DispenserInput from "./DispenserInput";
import DispenserResult from "./DispenserResult";

function App() {
  const [amount, setAmount] = useState(0);
  const [breakdown, setBreakdown] = useState(null);
  const denominations = [200, 100, 50, 20, 10];

  const dispenseCash = () => {
    let remaining = amount;
    const result = {};
    denominations.forEach((denom) => {
      if (remaining >= denom) {
        result[denom] = Math.floor(remaining / denom);
        remaining = remaining % denom;
      }
    });
    setBreakdown({ result, remaining });
  };

  return (
    <div className="section atm-section">
      <div className="container">
        <h1>🏧 ATM Cash Dispenser</h1>
        <DispenserInput
          amount={amount}
          setAmount={setAmount}
          dispenseCash={dispenseCash}
          setBreakdown={setBreakdown}
        />
        <DispenserButton dispenseCash={dispenseCash} />
        {breakdown && <DispenserResult breakdown={breakdown} amount={amount} />}
      </div>
    </div>
  );
}

export default App;
