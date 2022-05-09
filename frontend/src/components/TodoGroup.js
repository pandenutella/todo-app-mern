import { Card, List, Typography } from "antd";

const TodoGroup = ({ group }) => (
  <Card title={group.name}>
    <List
      dataSource={group.items}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text delete={item.completed}>
            {item.title}
          </Typography.Text>
        </List.Item>
      )}
    />
  </Card>
);

export default TodoGroup;
