import { createPortal } from "react-dom";
import { DialogContext } from "../providers/DialogProvider";
import { useContext } from "react";
import "./confirm.css";
const ConfirmDialog = () => {
  const { isOpen } = useContext(DialogContext);

  if (!isOpen) return null;

  return createPortal(<Dialog />, document.body);
};

export default ConfirmDialog;

const Dialog = () => {
  const { closeDialog } = useContext(DialogContext);
  return (
    <div id="popup" className="dialog-root">
      <div className="dialog-background" />
      <div className="dialog-content">
        portal
        <button onClick={closeDialog}>close</button>
      </div>
    </div>
  );
};
