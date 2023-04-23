import { Input } from "antd";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const FormTask = ({ placeholder, addTodo, className }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <form>
        <Input
          className={className}
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
        <ButtonComponent text="Add Task" onClick={handleSubmit} icon={null} />
      </form>
    </div>
  );
};

export default FormTask;
