import { List, Typography } from "antd";

const TodoItem = ({ item }) => {
  return (
    <List.Item>
      <Typography.Text delete={item.completed}>{item.title}</Typography.Text>
    </List.Item>
  );
};

export default TodoItem;
