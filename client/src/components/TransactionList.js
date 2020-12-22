import React, { useContext }from 'react';

import { Transaction } from './Transaction';  
import { GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);

 // Transactions are passed in as a prop, from global context, rendering a transaction component list with unique key
    return (
        <>
            <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} 
        transaction={transaction}/>))}
        
      </ul>
        </>
    )
}
