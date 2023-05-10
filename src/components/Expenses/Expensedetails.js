
const ExpenseDetails = (props) => {
    return (
        <div className="expense-item__desc">
            <h2>{props.title}</h2>
            <h2>{props.expenditure}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );
}

export default ExpenseDetails;