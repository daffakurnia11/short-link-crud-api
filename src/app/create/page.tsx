"use client";

import { Card, Typography } from "antd";

/**
 * Home component is a content of homepage
 * @returns Home Component
 */
export default function Create(): React.JSX.Element {
  return (
    <>
      <Card>
        <Typography.Title level={4}>Create Link</Typography.Title>
        <Typography.Paragraph>
          Fill the form to create your own short link.
        </Typography.Paragraph>
      </Card>
    </>
  );
}
