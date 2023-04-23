import { Card, Space } from "antd";
import ButtonComponent from "./ButtonComponent";

const Tasks = ({ task, isCompleted, deleteTask, editTask }) => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        className={`${task.completed ? "is-completed" : ""}`}
        size="small"
        bordered={true}
        title={task.task}
        style={{
          width: 400,
          margin: 20,
          backgroundColor: "#e6e8f8",
        }}
      >
        <ButtonComponent
          type="link"
          text="done"
          onClick={() => isCompleted(task.id)}
        />
        <ButtonComponent
          type="link"
          text="edit"
          onClick={() => editTask(task.id)}
        />
        <ButtonComponent
          type="link"
          text="delete"
          onClick={() => deleteTask(task.id)}
        />
      </Card>
    </Space>
  );
};

export default Tasks;
