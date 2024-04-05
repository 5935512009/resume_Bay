import React, { createContext } from 'react'

import Mock_data from '../Assets/Mock_data';

export const ShopContext = createContext(null);
const ShopContextProvider = (props)=> {
const contextValue ={Mock_data};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;