import { Layout } from "antd";

const AppLayout = ({ children }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Layout.Header></Layout.Header>
    <Layout.Content style={{ padding: 20 }}>{children}</Layout.Content>
  </Layout>
);

export default AppLayout;
