import React from "react";

import { Button, Space } from "antd";
import { Layout, Menu, theme } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  UserAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import AddNewCard from "./add-new-card";

const { Header, Content, Footer, Sider } = Layout;

function HomePage() {
  return (
    <>
      <h2>Upload Business Card</h2>
      <AddNewCard></AddNewCard>
    </>
  );
}

export default HomePage;
