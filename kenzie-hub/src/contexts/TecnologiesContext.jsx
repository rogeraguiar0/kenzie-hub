import { createContext } from "react";

export const TecnologiesContex = createContext({});
function TecnologiesProvider({ children }) {
  return <TecnologiesContex.Provider>{children}</TecnologiesContex.Provider>;
}

export default TecnologiesProvider;
