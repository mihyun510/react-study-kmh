import { useContext } from "react";
import { DialogContext } from "../providers/DialogProvider";

const Item = ({ children }) => {
  const { openDialog } = useContext(DialogContext);

  //console.log(context);

  return (
    <li>
      {children} <button onClick={openDialog}>view</button>
    </li>
  ); //fragment
};

export default Item;
