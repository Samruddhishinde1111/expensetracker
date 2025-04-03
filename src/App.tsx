import React from "react";
import { Layout, Tabs } from "antd";
import ExpenseManager from "./components/ExpenseManager";
import CategoryManager from "./components/CategoryManager";

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", padding: "20px" }}>
      <Header style={{ background: "#001529", color: "white", fontSize: "28px", textAlign: "center" }}>
        Expense Tracker
      </Header>
      <Content style={{ margin: "20px auto", width: "80%", maxWidth: "600px" }}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Expenses" key="1">
            <ExpenseManager />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Manage Categories" key="2">
            <CategoryManager />
          </Tabs.TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default App;
