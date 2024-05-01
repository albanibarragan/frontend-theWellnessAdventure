import { createContext, useContext, useReducer } from "react";

const RegFormContext = createContext();

export const useRegFormContext = () => {
  return useContext(RegFormContext); //acceder a contexto y usarlo
};

const reducer = (state, action) => {
  //{ type, data }
  switch (action.type) {
    case "SET_BUY_DATA": {
      return { ...state, buy: { ...action.data } };
    }
    case "SET_PAYMENT_DATA": {
      return { ...state, payment: { ...action.data } };
    }
  }
  return state;
};

const RegFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { percent: 0 });
  return (
    <RegFormContext.Provider value={[state, dispatch]}>
      {children}
    </RegFormContext.Provider>
  );
};

export default RegFormProvider;
