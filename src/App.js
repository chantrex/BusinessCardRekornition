import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Space } from "antd";
import { Layout, Menu, theme } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  UserAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import AddNewCard from "./pages/add-new-card";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const myMenu = [
    {
      key: 1,
      icon: <UserOutlined />,
      label: <a href="/list">My Business Cards`</a>,
    },
    {
      key: 2,
      icon: <UserAddOutlined />,
      label: <a href="/">`Add New Business Card`</a>,
    },
  ];

  return (
    <div className="App">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={myMenu}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
              minHeight: "100vh",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
