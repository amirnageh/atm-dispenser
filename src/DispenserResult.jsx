const DispenserResult = ({ breakdown, amount }) => {
  return (
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
              Cannot dispense ${breakdown?.remaining} (not a valid denomination)
            </b>
          </p>
        )}
        {Object.values(breakdown.result).every((c) => c === 0) &&
          breakdown.remaining === 0 && <p>Enter an amount to dispense.</p>}
      </div>
    </div>
  );
};

export default DispenserResult;
