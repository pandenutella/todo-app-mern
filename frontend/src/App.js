import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import AppLayout from "./components/AppLayout";
import NewTodoGroup from "./components/NewTodoGroup";
import TodoGroup from "./components/TodoGroup";

const columnWidth = {
  xs: 24,
  sm: 12,
  xl: 8,
  xxl: 6,
};

const App = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getGroups = axios.get(`${process.env.REACT_APP_BACKEND_URL}/groups`);
    const getItems = axios.get(`${process.env.REACT_APP_BACKEND_URL}/items`);

    Promise.all([getGroups, getItems]).then((responses) => {
      const [getGroupsResponse, getItemsResponse] = responses;
      const groups = getGroupsResponse.data;
      const items = getItemsResponse.data;

      setGroups(
        groups.map((group) => ({
          ...group,
          items: items.filter((item) => item.group === group._id),
        }))
      );
    });
  }, []);

  const handleGroupCreate = (group) =>
    setGroups((groups) => [...groups, group]);

  const handleGroupDelete = (id) =>
    setGroups((groups) => groups.filter((group) => group._id !== id));

  const handleItemAdd = (item) => {
    setGroups((groups) =>
      groups.map((group) => {
        if (group._id !== item.group) return group;

        return { ...group, items: [...group.items, item] };
      })
    );
  };

  const handleItemUpdate = (item) => {
    setGroups((groups) =>
      groups.map((group) => {
        if (group._id !== item.group) return group;

        return {
          ...group,
          items: group.items.map((i) => (i._id !== item._id ? i : item)),
        };
      })
    );
  };

  const handleItemDelete = (item) => {
    setGroups((groups) =>
      groups.map((group) => {
        if (group._id !== item.group) return group;

        return {
          ...group,
          items: group.items.filter((i) => i._id !== item._id),
        };
      })
    );
  };

  return (
    <AppLayout>
      <Row gutter={[20, 20]}>
        {groups.map((group) => (
          <Col key={group._id} {...columnWidth}>
            <TodoGroup
              group={group}
              onDelete={handleGroupDelete}
              onItemAdd={handleItemAdd}
              onItemUpdate={handleItemUpdate}
              onItemDelete={handleItemDelete}
            />
          </Col>
        ))}
        <Col {...columnWidth}>
          <NewTodoGroup onCreate={handleGroupCreate} />
        </Col>
      </Row>
    </AppLayout>
  );
};

export default App;
