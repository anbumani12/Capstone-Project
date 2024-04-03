import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCirclePlus,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Status from "../Status";
import toast from "react-hot-toast";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <FontAwesomeIcon icon={faHouse} />,
    label: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    key: "2",
    icon: <FontAwesomeIcon icon={faCirclePlus} />,
    label: "Create Request",
    link: "/createpage",
  },
  {
    key: "3",
    icon: <FontAwesomeIcon icon={faCheckCircle} />,
    label: "Check Status",
    link: "/statuspage",
  },
];

const Statuspage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleDataFetching = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ paddingTop: "64px" }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["3"]} mode="inline">
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link} style={{ textDecoration: "none" }}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <div style={{ color: "#fff", fontSize: "17px" }}>Check Status</div>
          <div>
            <button
              onClick={handleDataFetching}
              style={{
                marginRight: "10px",
                color: "#fff",
                background: "transparent",
                border: "none",
              }}
            >
              Submit
            </button>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div style={{ margin: "16px 0" }}>
            <Breadcrumb>
              <Breadcrumb.Item>Check Status</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              background: "#fff",
              borderRadius: "5px",
            }}
          >
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 200,
                }}
              >
                <Spin size="large" />
              </div>
            ) : (
              <Status />
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Statuspage;
