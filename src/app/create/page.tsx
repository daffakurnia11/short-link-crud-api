"use client";

import { useState } from "react";
import { CreateApi } from "@/api/apis";
import { RequestBodyType } from "@/types/request";
import { Button, Card, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";

/**
 * Create component is a form creation for creating new short link
 * @returns Create Component
 */
export default function Create(): React.JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: RequestBodyType) => {
    setLoading(true);
    CreateApi(values).then((resp: any) => {
      if (resp.status === 201) {
        console.log(resp);
        router.push("/");
      } else {
        console.log(resp);
      }
      setLoading(false);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Card style={{ maxWidth: 700 }} className="mx-auto">
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
            <Input disabled={loading} placeholder="Link Example" />
          </Form.Item>
          <Form.Item
            label="Original Link"
            name="origin"
            rules={[
              { required: true, message: "Please input the original link!" },
              { type: "url", message: "Please input the valid link!" },
            ]}
          >
            <Input disabled={loading} placeholder="http://example.com/" />
          </Form.Item>
          <Form.Item
            label="Shorten Link"
            name="custom"
            rules={[
              { required: true, message: "Please input the shorten link!" },
            ]}
          >
            <Input
              disabled={loading}
              addonBefore="http://link.dafkur.com/"
              placeholder="shorten"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Shorten now!
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}
