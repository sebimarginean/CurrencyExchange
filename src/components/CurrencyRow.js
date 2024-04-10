import React from "react";

export default ({ rates, selectedCurrency, onChangeCurrency, onChangeAmount, amount }) => {

  const propertyNames = Object.keys(rates);
  const listOfItems = propertyNames.map((rate) => (
    <option key={rate} value={rate}>
      {rate}
    </option>
  ));

  return (
    <>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>{listOfItems}</select>
    </>
  );
};
