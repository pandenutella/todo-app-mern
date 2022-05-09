import { Button, Form } from "antd";
import axios from "axios";
import { useState } from "react";
import NewTodoItemModal from "./NewTodoItemModal";

const NewTodoItem = ({ group, onAdd }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [adding, setAdding] = useState(false);
  const [form] = Form.useForm();

  const handleClick = () => setModalVisible(true);

  const handleAdd = (item) => {
    setAdding(true);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/items`, {
        ...item,
        group: group._id,
        completed: false,
      })
      .then((response) => {
        onAdd(response.data);
        setModalVisible(false);
        form.resetFields();
      })
      .finally(() => setAdding(false));
  };

  return (
    <>
      <Button type="dashed" block onClick={handleClick}>
        New Item
      </Button>
      <NewTodoItemModal
        form={form}
        adding={adding}
        visible={modalVisible}
        onVisibleChange={setModalVisible}
        onItemAdd={handleAdd}
      />
    </>
  );
};

export default NewTodoItem;
