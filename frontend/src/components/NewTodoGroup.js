import { Button, Card, Form, Input, Modal } from "antd";
import axios from "axios";
import { useState } from "react";

const NewTodoGroup = ({ onCreate }) => {
  const [visible, setVisible] = useState(false);
  const [adding, setAdding] = useState(false);
  const [form] = Form.useForm();

  const handleNewGroupClick = () => setVisible(true);
  const handleOk = () => form.submit();
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleFinish = (values) => {
    setAdding(true);
    const { name } = values;

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/groups`, { name })
      .then(({ data }) => {
        onCreate(data);
        setVisible(false);
        form.resetFields();
      })
      .finally(() => setAdding(false));
  };

  return (
    <Card>
      <Button type="dashed" block onClick={handleNewGroupClick}>
        New Group
      </Button>
      <Modal
        title="New Group"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ loading: adding }}
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default NewTodoGroup;
