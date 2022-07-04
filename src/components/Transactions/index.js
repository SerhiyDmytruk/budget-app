import Transaction from '../Transaction';
import PropTypes from 'prop-types';

import './style.scss'

const Transactions = ({transactions = []}) => {
    return (
        <div className='transactions'>
            {
                transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>)
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