import { Button, List, Typography } from "antd";
import axios from "axios";
import { useState } from "react";

const TodoItem = ({ item, onUpdate }) => {
  const [updating, setUpdating] = useState(false);

  const handleCompleteClick = () => {
    setUpdating(true);

    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/items/${item._id}`, {
        completed: true,
      })
      .then(({ data }) => onUpdate(data))
      .finally(() => setUpdating(false));
  };

  const renderCompleteButton = () => {
    if (item.completed) return <></>;

    return (
      <Button onClick={handleCompleteClick} type="link" loading={updating}>
        Complete
      </Button>
    );
  };

  return (
    <List.Item actions={[renderCompleteButton()]}>
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
