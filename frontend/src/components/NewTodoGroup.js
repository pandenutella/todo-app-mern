import { Button, Card, Col, Input, Row } from "antd";
import axios from "axios";
import { useState } from "react";

const NewTodoGroup = ({ onCreate }) => {
  const [name, setName] = useState("");

  const handleChange = ({ target }) => setName(target.value);

  const handleCreate = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/groups`, { name })
      .then((response) => {
        onCreate(response.data);

        setName("");
      });
  };

  const renderTitle = () => (
    <Row gutter={[20, 20]}>
      <Col flex="auto">
        <Input
          placeholder="New Group Name"
          value={name}
          onChange={handleChange}
        />
      </Col>
      <Col flex="73px">
        <Button type="primary" onClick={handleCreate}>
          Create
        </Button>
      </Col>
    </Row>
  );

  return <Card title={renderTitle()} />;
};

export default NewTodoGroup;
