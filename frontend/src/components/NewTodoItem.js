import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import { useState } from "react";

const NewTodoItem = ({ group, onAdd }) => {
  const [visible, setVisible] = useState(false);
  const [adding, setAdding] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => form.submit();
  const handleCancel = () => {
    setVisible(false);
  };

  const handleClick = () => setVisible(true);

  const handleFinish = (values) => {
    setAdding(true);

    const item = {
      title: values.title,
      description: values.description ? values.description : null,
      group: group._id,
      completed: false,
    };

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/items`, item)
      .then(({ data }) => {
        onAdd(data);
        setVisible(false);
        form.resetFields();
      })
      .finally(() => setAdding(false));
  };

  return (
    <>
      <Button type="dashed" block onClick={handleClick}>
        New Item
      </Button>
      <Modal
        title="New Item"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ loading: adding }}
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewTodoItem;
