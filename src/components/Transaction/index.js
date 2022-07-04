import PropTypes from 'prop-types';
import {Wrapper} from './style';

const Transaction = ({transaction: {value, label}}) => {
    return (
        <Wrapper value={value}>
            Label: {label}
            <p>Value: {value}</p>
        </Wrapper>
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
        label: ''
    }
}

export default Transaction;