const Balance = ({balance, children}) => {
    return (
        <div>
            {children}: { balance }
        </div>
    )
}
export default Balance;