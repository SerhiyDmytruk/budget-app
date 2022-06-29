import React from 'react';
import Balance from '../Balance'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      balance: 0,
      transactions: []
    }

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);


    console.log('constructor');
  }

  onIncrease () {
    this.setState((state) => ({
      balance: state.balance + 1,
      transactions: [{
        label: 'increase',
        value: 1
      }, ...state.transactions]
    }))
  }

  onDecrease () {
    this.setState((state) => ({
      balance: this.state.balance - 1,
      transactions: [{
        label: 'decrease',
        value: -1
      }, ...state.transactions]
    }))
  }

  render () {
    console.log('render');

      return (
      <div>
          <Balance balance={this.state.balance}>
            some text
          </Balance>
          <button onClick={this.onIncrease}>
            додати 1
          </button>

          <button onClick={this.onDecrease}>
            зменшити 1
          </button>


          { 
            this.state.transactions.map((transactions) => {
              <div>
                Label:  {transactions.label}
                <p>Value: {transactions.value}</p>
              </div>
            })
          }
      </div>
      )
    };
};

export default App;