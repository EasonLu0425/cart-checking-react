import { useState, createContext } from "react";

const ShippingContext = createContext()



function ShippingProvider ({children}) {
  const [shippingCost, setShippingCost] = useState(0)
  function handleShippingChange(price) {
    const nextShippingCost = parseInt(price);
    setShippingCost(nextShippingCost)
  }
  return (
    <ShippingContext.Provider value={{shippingCost, onShippingChange:handleShippingChange}}>
      {children}
    </ShippingContext.Provider>
  )
}

export {ShippingContext, ShippingProvider}