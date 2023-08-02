import { createContext, useState } from "react";

const FormContext = createContext()

function FormProvider ({children}) {
  const [userInfo, setUserInfo] = useState({
    mrms: "mr",
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });

  return (
    <FormContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </FormContext.Provider>
  )
}

export {FormContext, FormProvider}