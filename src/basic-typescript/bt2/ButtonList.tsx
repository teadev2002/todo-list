import ButtonComponent from "./ButtonComponent";
import { message } from "antd";

const ButtonList = () => {
  return (
    <div>
      <ButtonComponent
        label="Save"
        size="large"
        variant="success"
        onClick={() => message.success("Save successfully!")}
        disable={false}
      />
      &nbsp;
      <ButtonComponent
        label="Delete"
        size="large"
        variant="danger"
        onClick={() => message.error("Delete successfully!")}
        disable={false}
      />
      &nbsp;
      <ButtonComponent
        label="Add"
        size="large"
        variant="primary"
        onClick={() => message.info("Add successfully!")}
        disable={false}
      />
      &nbsp;
      <ButtonComponent
        label="Edit"
        size="large"
        variant="warning"
        onClick={() => message.warning("Edit successfully!")}
        disable={false}
      />
    </div>
  );
};

export default ButtonList;
