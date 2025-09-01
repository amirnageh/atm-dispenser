import { useState } from "react";

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
        <input
          type="number"
          id="atmInput"
          placeholder="Enter amount"
          className="input-field atm-input"
          value={amount === 0 ? "" : amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min="0"
        />
        <button type="button" className="btn atm-btn" onClick={dispenseCash}>
          Dispense Cash
        </button>

        {breakdown && (
          <div id="atmResult" className="atm-result">
            <h3>💰 Cash Breakdown:</h3>
            <div id="cashBreakdown">
              <p>
                <b>Dispensing ${amount} in:</b>
              </p>
              {Object.entries(breakdown.result).map(
                ([denom, count]) =>
                  count > 0 && (
                    <div key={denom}>
                      <p>
                        💵 {count} × ${denom} = ${count * denom}
                      </p>
                    </div>
                  )
              )}
              {breakdown?.remaining > 0 && (
                <p style={{ color: "red" }}>
                  <b>
                    Cannot dispense ${breakdown?.remaining} (not a valid
                    denomination)
                  </b>
                </p>
              )}
              {Object.values(breakdown.result).every((c) => c === 0) &&
                breakdown.remaining === 0 && (
                  <p>Enter an amount to dispense.</p>
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
