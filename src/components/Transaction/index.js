const Transaction = ({transactions}) => {
    return (
        <div>
            Label: {transactions.label}
            <p>Value: {transactions.value}</p>
        </div>
    )
}

export default Transaction;