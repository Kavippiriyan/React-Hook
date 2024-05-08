import { useReducer } from 'react'

const transactionReducer = (state: any, action: any) => {

    switch (action.type) {
        case 'withdraw':
            return state - action.payload
        case "deposit":
            return state + action.payload
        default:
            return state;
    }

}
export default function UseReducer() {

    const withdraw = (amount: number) => {
        dispatch({ type: "withdraw", payload: amount })
    }

    const deposit = (amount: number) => {
        dispatch({ type: "deposit", payload: amount })
    }

    const [state, dispatch] = useReducer(transactionReducer, 1000);
    return (
        <div>
            <p>Your Bank Account Balance : {state}</p>
            <button onClick={() => withdraw(500)}>Withdraw</button>
            <button onClick={() => deposit(200)}>Deposit</button>
        </div>
    )
}
