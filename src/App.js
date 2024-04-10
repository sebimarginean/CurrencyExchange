import React from "react";
import { fetchData } from "./api/";
import { CurrencyRow } from "./components";
import "./App.css";

class App extends React.Component {
  state = {
    data: {},
    fromCurrency: "EUR",
    toCurrency: "RON",
    exchangeRate: 0,
    amount: 1,
    amountInFromCurrency: true,
  };


  async componentDidMount() {
    const data = await fetchData();
    this.setState(data)
  }
  
  render() {
    const {
      data: { rates },
      fromCurrency,
      toCurrency,
      amount,
      amountInFromCurrency
    } = this.state;

    let {exchangeRate} = this.state
    if(rates) 
      exchangeRate = rates[toCurrency]/rates[fromCurrency]
    else return <div className="loader"></div>;

    let toAmount, fromAmount;
    if(amountInFromCurrency) {
      fromAmount = amount
      toAmount = amount * exchangeRate
    } else {
      toAmount = amount
      fromAmount = amount/exchangeRate
    }

    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="display">
          <h2 className="name">Currency Converter</h2><hr id="hr" />
          <h4>{amount} {fromCurrency} is equivalent to</h4>
          <p className="exchange-sentence">{exchangeRate} {toCurrency}</p>
          <CurrencyRow 
            rates={rates}
            selectedCurrency = {fromCurrency}
            onChangeCurrency = {e => this.setState({fromCurrency:e.target.value})}
            onChangeAmount = {e => this.setState({amount:e.target.value, amountInFromCurrency:true})}
            amount = {fromAmount}
          />
          <div className="symbol">&#8645;</div>
          <CurrencyRow 
            rates={rates} 
            selectedCurrency = {toCurrency}
            onChangeCurrency = {e => this.setState({toCurrency:e.target.value})}
            onChangeAmount = {e => this.setState({amount:e.target.value, amountInFromCurrency:false})}
            amount = {toAmount}
          />
        </div>
      </>
    )
    
  }
}

export default App;
