import { createContext, useState } from "react";

export const DialogContext = createContext(null);

const initialState = {
  isOpen: false,
};
export const DialogProvider = ({ children }) => {
  const [dialog, setDialog] = useState(initialState);

  const { isOpen } = dialog;

  const openDialog = () => {
    setDialog((state) => ({
      ...state,
      isOpen: true,
    }));
  };

  const closeDialog = () => {
    setDialog((state) => ({
      ...state,
      isOpen: false,
    }));
  };

  return (
    <DialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};
