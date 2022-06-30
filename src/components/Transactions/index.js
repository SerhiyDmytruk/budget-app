import Transaction from '../Transaction';
import PropTypes from 'prop-types';

const Transactions = ({transactions = []}) => {
    return (
        <div>
            {
              transactions.map((transactions) => <Transaction key={transactions.id} transactions={transactions} />)
            }
        </div>
    )
}

Transactions.propTypes = {
    transactions: PropTypes.array
}

Transactions.defaultProps = {
    transactions: []
}
export default Transactions;