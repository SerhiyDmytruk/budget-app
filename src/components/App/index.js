import React from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions'

let id = 0;

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
        value: 1,
        id: ++id,
      }, ...state.transactions]
    }))
  }

  onDecrease () {
    this.setState((state) => ({
      balance: this.state.balance - 1,
      transactions: [{
        label: 'decrease',
        value: -1,
        id: --id,
      }, ...state.transactions]
    }))
  }

  render () {
    console.log('render');

      return (
        <div>
            <Balance balance={this.state.balance}>some text</Balance>
            <button onClick={this.onIncrease}>додати 1</button>
            <button onClick={this.onDecrease}>зменшити 1</button>

            <Transactions transactions={this.state.transactions} />
        </div>
      )
    };
};

export default App;