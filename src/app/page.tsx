"use client";

import { DeleteApi, ListApi } from "@/api/apis";
import { Button, Card, Popconfirm, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { ApiResponse } from "@/types/response";
import { useSetAtom } from "jotai";
import { globalNotif } from "@/utils/atom";

/**
 * Home component is a content of homepage
 * @returns Home Component
 */
export default function Home(): React.JSX.Element {
  const [data, setData] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const setNotification = useSetAtom(globalNotif);

  const loadData = () => {
    setLoading(true);
    ListApi().then((resp: any) => {
      if (resp.status === 200) {
        setData(resp.data);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const onDeleteHandler = (custom: string) => {
    setLoading(true);
    DeleteApi(custom).then((resp: ApiResponse) => {
      if (resp.status === 204) {
        setNotification({
          type: "success",
          title: "Short link deleted",
          message: "Your short link has been deleted!",
        });
        loadData();
      }
      setLoading(false);
    });
  };

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
      render: (data: Object, record: any): any => {
        return (
          <Popconfirm
            placement="bottom"
            title={"Delete confirmation"}
            description={"Are you sure you want to delete this short link?"}
            onConfirm={() => onDeleteHandler(record.custom)}
            okText="Yes"
            cancelText="Cancel"
          >
            <Button type="text" style={{ padding: "0 8px" }}>
              <Typography.Text type="danger">
                <DeleteOutlined />
              </Typography.Text>
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

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
