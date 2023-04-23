import { Button } from "antd";

const ButtonComponent = ({ onClick, text, icon, type }) => {
  return (
    <>
      <Button type={type} onClick={onClick} icon={icon}>
        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
