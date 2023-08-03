"use client";

import { tableColumn } from "@/utils/table";
import { Card, Table, Typography } from "antd";

/**
 * Home component is a content of homepage
 * @returns Home Component
 */
export default function Home(): React.JSX.Element {
  return (
    <>
      <Card>
        <Typography.Title level={4}>Short Link List</Typography.Title>
        <Typography.Paragraph>
          Your short link list you have been created. You can manage the link as
          you want.
        </Typography.Paragraph>
        <Table columns={tableColumn} />
      </Card>
    </>
  );
}
