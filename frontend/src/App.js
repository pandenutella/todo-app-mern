import { Col, Row } from "antd";
import AppLayout from "./components/AppLayout";
import TodoGroup from "./components/TodoGroup";

const App = () => {
  const groups = [
    {
      _id: "1",
      name: "A Group",
      items: [
        {
          _id: "1",
          title: "An Item",
          description: "This is a todo item",
          completed: false,
        },
        {
          _id: "2",
          title: "Another Item",
          description: "This is another todo item",
          completed: true,
        },
      ],
    },
    {
      _id: "2",
      name: "Another Group",
      items: [
        {
          _id: "1",
          title: "An Item",
          description: "This is a todo item",
          completed: true,
        },
        {
          _id: "2",
          title: "Another Item",
          description: "This is another todo item",
          completed: false,
        },
      ],
    },
  ];

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
