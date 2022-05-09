import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, List, Popconfirm } from "antd";
import axios from "axios";
import { useState } from "react";
import NewTodoItem from "./NewTodoItem";
import TodoItem from "./TodoItem";

const TodoGroup = ({
  group,
  onDelete,
  onItemAdd,
  onItemUpdate,
  onItemDelete,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleItemAdd = (item) => onItemAdd(item);

  const handleDelete = () => {
    setDeleting(true);

    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/groups/${group._id}`)
      .then(() => onDelete(group._id))
      .finally(() => setDeleting(false));
  };

  const renderExtra = () => {
    if (group.items.length) return <></>;

    return (
      <Popconfirm
        title="Are you sure you want to delete this group?"
        onConfirm={handleDelete}
        disabled={deleting}
      >
        <Button icon={<DeleteOutlined />} danger loading={deleting} />
      </Popconfirm>
    );
  };

  return (
    <Card title={group.name} extra={renderExtra()}>
      <List
        itemLayout="horizontal"
        dataSource={group.items}
        renderItem={(item) => (
          <TodoItem
            item={item}
            onUpdate={onItemUpdate}
            onDelete={onItemDelete}
          />
        )}
        footer={<NewTodoItem group={group} onAdd={handleItemAdd} />}
      />
    </Card>
  );
};

export default TodoGroup;
