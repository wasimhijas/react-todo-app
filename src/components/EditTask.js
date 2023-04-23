import { Input, Card, Space } from "antd";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const EditTask = ({ placeholder, editTodo, task }) => {
  const [editValue, editSetValue] = useState(task.task);
  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(editValue, task.id);
    editSetValue("");
  };
  return (
    <Space direction="vertical" size={24}>
      <Card
        size="small"
        bordered={true}
        extra={
          <Input
            bordered={false}
            className="edittask-style"
            value={editValue}
            type="text"
            placeholder={placeholder}
            onChange={(e) => editSetValue(e.target.value)}
          />
        }
        style={{
          width: 400,
          margin: 20,
          backgroundColor: "#e6e8f8",
        }}
      >
        <ButtonComponent type="link" text="update" onClick={handleEdit} />
      </Card>
    </Space>
  );
};

export default EditTask;
