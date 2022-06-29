import Transaction from '../Transaction'

const Transactions = (props) => {
    return (
        <div>
            {
              props.transactions.map((transactions) => <Transaction key={transactions.id} transactions={transactions} />)
            }
        </div>
    )
}

export default Transactions;