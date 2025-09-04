const DispenserButton = ({ dispenseCash }) => {
  return (
    <button type="button" className="btn atm-btn" onClick={dispenseCash}>
      Dispense Cash
    </button>
  );
};

export default DispenserButton;
