const Transaction = (props) => {
    return (
        <div>
            Label: {props.transactions.label}
            <p>Value: {props.transactions.value}</p>
        </div>
    )
}

export default Transaction;