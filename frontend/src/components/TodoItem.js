import { List, Typography } from "antd";

const TodoItem = ({ item }) => {
  return (
    <List.Item>
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
