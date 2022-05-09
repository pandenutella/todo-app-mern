import { Card, List } from "antd";
import NewTodoItem from "./NewTodoItem";
import TodoItem from "./TodoItem";

const TodoGroup = ({ group, onItemAdd }) => {
  const handleItemAdd = (item) => onItemAdd(item);

  return (
    <Card title={group.name}>
      <List
        dataSource={group.items}
        renderItem={(item) => <TodoItem item={item} />}
      />
      <NewTodoItem group={group} onAdd={handleItemAdd} />
    </Card>
  );
};

export default TodoGroup;
