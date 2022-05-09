import { Card, List } from "antd";
import NewTodoItem from "./NewTodoItem";
import TodoItem from "./TodoItem";

const TodoGroup = ({ group, onItemAdd, onItemUpdate }) => {
  const handleItemAdd = (item) => onItemAdd(item);

  return (
    <Card title={group.name}>
      <List
        itemLayout="horizontal"
        dataSource={group.items}
        renderItem={(item) => <TodoItem item={item} onUpdate={onItemUpdate} />}
        footer={<NewTodoItem group={group} onAdd={handleItemAdd} />}
      />
    </Card>
  );
};

export default TodoGroup;
