// Specifies the applications' state change
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            //creates a new state using the spread operator, sending all transaction except the one deleted
            return {
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !==action.payload)
            }
            case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        default:
            return state;
    }
}