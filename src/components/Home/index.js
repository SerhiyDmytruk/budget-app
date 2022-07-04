import React from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from "../ErrorBoundary";

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            balance: 0,
            transactions: [],
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = ({value, date, comment}) => {
        const transaction = {
            value: +value, 
            comment,
            date,
            id: Date.now()
        }
        
        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [
                transaction,
                ...state.transactions,
            ],
        }));
    };

    render() {
        return (
            <ErrorBoundary>
                <React.Fragment>
                    <Balance balance={this.state.balance}>Balance</Balance>

                    <Form onChange={this.onChange}/>

                    <Transactions transactions={this.state.transactions}/>
                </React.Fragment>
            </ErrorBoundary>
        );
    }
}

export default Home;
