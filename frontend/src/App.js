import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import AppLayout from "./components/AppLayout";
import TodoGroup from "./components/TodoGroup";

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

  return (
    <AppLayout>
      <Row gutter={[20, 20]}>
        {groups.map((group) => (
          <Col key={group._id} xs={24} sm={12} xl={8} xxl={6}>
            <TodoGroup group={group} />
          </Col>
        ))}
      </Row>
    </AppLayout>
  );
};

export default App;
