"use client";

import { ListApi } from "@/api/apis";
import { Card, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Table Column List of Array
 * use to define the column of table in short link list
 */
const tableColumn: ColumnsType<Object> = [
  {
    title: "No",
    dataIndex: "index",
    key: "index",
    render: (id: number, render: any, index: number): any => {
      ++index;
      return index;
    },
  },
  {
    title: "Short Link Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Original Link",
    dataIndex: "origin",
    key: "origin",
    render: (data) => (
      <Link href={data} target="_black">
        {data}
      </Link>
    ),
  },
  {
    title: "Custom Short Link",
    dataIndex: "custom",
    key: "custom",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

/**
 * Home component is a content of homepage
 * @returns Home Component
 */
export default function Home(): React.JSX.Element {
  const [data, setData] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    ListApi().then((resp: any) => {
      if (resp.status === 200) {
        setData(resp.data);
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Card>
        <Typography.Title level={4}>Short Link List</Typography.Title>
        <Typography.Paragraph>
          Your short link list you have been created. You can manage the link as
          you want.
        </Typography.Paragraph>
        <Table columns={tableColumn} dataSource={data} loading={loading} />
      </Card>
    </>
  );
}
