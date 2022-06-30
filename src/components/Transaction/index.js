import PropTypes from 'prop-types';

const Transaction = ({transaction}) => {
    return (
        <div>
            Label: {transaction.label}
            <p>Value: {transaction.value}</p>
        </div>
    )
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: 0
    }
}

export default Transaction;