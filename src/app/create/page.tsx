"use client";

import { Button, Card, Form, Input, Typography } from "antd";

/**
 * Home component is a content of homepage
 * @returns Home Component
 */
export default function Create(): React.JSX.Element {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Card>
        <Typography.Title level={4}>Create Link</Typography.Title>
        <Typography.Paragraph>
          Fill the form to create your own short link.
        </Typography.Paragraph>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Short Link Name"
            name="name"
            rules={[
              { required: true, message: "Please input the short link name!" },
            ]}
          >
            <Input placeholder="Link Example" />
          </Form.Item>
          <Form.Item
            label="Original Link"
            name="origin"
            rules={[
              { required: true, message: "Please input the original link!" },
              { type: "url", message: "Please input the valid link!" },
            ]}
          >
            <Input placeholder="http://example.com/" />
          </Form.Item>
          <Form.Item
            label="Shorten Link"
            name="custom"
            rules={[
              { required: true, message: "Please input the shorten link!" },
            ]}
          >
            <Input
              addonBefore="http://link.dafkur.com/"
              placeholder="shorten"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Shorten now!
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}
