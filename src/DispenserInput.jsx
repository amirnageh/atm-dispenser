const DispenserInput = ({ amount, setAmount, dispenseCash, setBreakdown }) => {
  return (
    <input
      type="number"
      id="atmInput"
      placeholder="Enter amount"
      className="input-field atm-input"
      value={amount === 0 ? "" : amount}
      onChange={(e) => {
        setAmount(Number(e.target.value));
        setBreakdown(null);
      }}
      min="0"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          dispenseCash();
        }
      }}
    />
  );
};

export default DispenserInput;
