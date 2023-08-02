import { createContext, useState } from "react";

const CardContext = createContext()

function CardProvider ({children}) {
  const [cardInfo, setCardInfo] = useState({
    cardOwner: "",
    cardNumber: "",
    cardValidation: "",
    validationNumber: "",
  });
  return (
    <CardContext.Provider value={{cardInfo, setCardInfo}}>
      {children}
    </CardContext.Provider>
  )
}

export {CardContext, CardProvider}
