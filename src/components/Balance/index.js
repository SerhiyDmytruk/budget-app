import {BalanceStyle} from './style';

const Balance = ({balance, children}) => {
    return (
        <BalanceStyle>
            {children}: {balance}
        </BalanceStyle>
    )
}

export default Balance;