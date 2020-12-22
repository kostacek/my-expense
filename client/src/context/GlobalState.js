import React, { createContext,useReducer } from 'react';
import AppReducer from  './AppReducer';
// Initial state
const initialState = {
    transactions:[]
    
}

//Create context
export const GlobalContext = createContext(initialState);

// Provider component using a reducer on the wrapped child components 
export const GlobalProvider =({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions making calls to reducer, dispatching an object
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Actions making calls to reducer, dispatching an object
    function addTransaction(transactions){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });
    }
// to use actions it has to be passed down to provider
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}