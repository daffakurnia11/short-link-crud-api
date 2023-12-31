"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/app.scss";
import { Layout, Space } from "antd";
import { Container } from "react-bootstrap";
import Navbar from "@/component/Navbar";
import Notification from "@/component/Notification";

/**
 * Homepage Layout Component
 * @param children Layout content as a children of layout component
 * @returns Layout Component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
          <Notification />
          <Layout>
            <Navbar />
            <Layout.Content
              style={{ minHeight: "99vh" }}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Container>{children}</Container>
            </Layout.Content>
          </Layout>
        </Space>
      </body>
    </html>
  );
}
