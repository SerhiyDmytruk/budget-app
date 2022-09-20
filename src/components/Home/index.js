import { useEffect, useState} from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from "../ErrorBoundary";

import {getItems, addItem} from '../../utils/indexdb';

const Home = () => {

    const [balance, setBalance] = useState(0);

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        getItems().then((item) => {
            setTransactions(item);
        }).catch((e) => {
            debugger;
            console.error(e);
        })
    },[setTransactions]);


    const onChange = ({value, date, comment}) => {

        const transaction = {
            value: +value, 
            comment,
            date,
            id: Date.now()
        }
        
        setTransactions( [
            transaction,
            ...transactions,
        ]);

        setBalance(balance + Number(value));

        addItem(transaction);
    };

    return (
        <ErrorBoundary>
            <Balance balance={balance}>Balance</Balance>

            <Form onChange={onChange}/>

            <Transactions transactions={transactions}/>
        </ErrorBoundary>
    );
}

export default Home;
