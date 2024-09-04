import { useState, memo } from "react";

const Form = ({ onClickAdd, items = [] }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleClickAdd = () => {
    onClickAdd({ name, age });
  };

  return (
    <>
      <p>{items.join(",")}</p>
      <div>
        <input type="text" value={name} onChange={handleChangeName} />
        <input type="number" value={age} onChange={handleChangeAge} />
        <button onClick={handleClickAdd}>add</button>
      </div>
    </>
  );
};

export default memo(Form);
