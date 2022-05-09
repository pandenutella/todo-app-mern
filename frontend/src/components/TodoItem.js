import { DeleteOutlined } from "@ant-design/icons";
import { Button, List, Popconfirm, Typography } from "antd";
import axios from "axios";
import { useState } from "react";

const TodoItem = ({ item, onUpdate, onDelete }) => {
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleCompleteClick = () => {
    setUpdating(true);

    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/items/${item._id}`, {
        completed: true,
      })
      .then(({ data }) => onUpdate(data))
      .finally(() => setUpdating(false));
  };

  const handleDelete = () => {
    setDeleting(true);

    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/items/${item._id}`)
      .then(() => onDelete(item))
      .finally(() => setDeleting(false));
  };

  const renderActions = () => {
    const actions = [];
    if (!item.completed)
      actions.push(
        <Button onClick={handleCompleteClick} type="link" loading={updating}>
          Complete
        </Button>
      );
    actions.push(
      <Popconfirm
        title="Are you sure you want to delete this item?"
        disabled={deleting}
        onConfirm={handleDelete}
      >
        <Button icon={<DeleteOutlined />} disabled={deleting}></Button>
      </Popconfirm>
    );

    return actions;
  };

  return (
    <List.Item actions={renderActions()}>
      <List.Item.Meta
        title={
          <Typography.Text delete={item.completed}>
            {item.title}
          </Typography.Text>
        }
        description={item.description}
      />
    </List.Item>
  );
};

export default TodoItem;
