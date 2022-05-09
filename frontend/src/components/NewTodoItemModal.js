import { Form, Input, Modal } from "antd";

const NewTodoItemModal = ({
  form,
  adding,
  visible,
  onVisibleChange,
  onItemAdd,
}) => {
  const handleOk = () => form.submit();
  const handleCancel = () => onVisibleChange(false);

  const handleFinish = (values) => {
    onItemAdd({
      title: values.title ? values.title : null,
      description: values.description ? values.description : null,
    });
  };

  return (
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
  );
};

export default NewTodoItemModal;
