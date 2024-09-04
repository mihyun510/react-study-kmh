import Item from "./Item";
import { initialStudents } from "../constants/student";
import Form from "./Form";
import { useState, useCallback, useMemo } from "react";

const List = () => {
  const [students, setStudents] = useState(initialStudents);

  const arr = useMemo(() =>
    Array.from({ length: 10 }).map((item, index) => index + 1)
  );
  console.log("arr", arr);

  const handleClickAdd = useCallback((input) => {
    console.log(input);
    setStudents((currentStudents) => [
      ...currentStudents,
      { ...input, id: currentStudents.length + 1 },
    ]);
  }, []);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <Form onClickAdd={handleClickAdd} items={arr} />
      </div>

      <ul>
        {students.map((student) => (
          <Item key={student.id}>
            {student.name} ({student.age})
          </Item>
        ))}
      </ul>
    </>
  );
};

export default List;
