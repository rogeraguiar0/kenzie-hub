import { createContext } from "react";
import { toast } from "react-toastify";

export const FeedbackContext = createContext({});

function FeedbackProvider({ children }) {
  const success = (message) => {
    toast.success(message);
  };
  const fail = (message) => {
    toast.error(message);
  };

  return (
    <FeedbackContext.Provider value={{ success, fail }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackProvider;
