"use client";

import { DeleteApi, ListApi, UpdateApi } from "@/api/apis";
import { Button, Card, Form, Input, Popconfirm, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ApiResponse } from "@/types/response";
import { useSetAtom } from "jotai";
import { globalNotif } from "@/utils/atom";
import { EditableCellProps, ShortLinkItem } from "@/types/table";

/**
 * Home component is a content of homepage
 * @returns Home Component
 */
export default function Home(): React.JSX.Element {
  const [data, setData] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const setNotification = useSetAtom(globalNotif);

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState(""); // Store edited key data
  const isEditing = (record: ShortLinkItem) => record.custom === editingKey; // Check whether is in editing mode

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

  // Edit handler
  const edit = (record: ShortLinkItem) => {
    form.setFieldsValue({
      ...record,
      name: "",
      origin: "",
      custom: "",
    });
    setEditingKey(record.custom);
  };

  // Cancel edit handler
  const cancel = () => {
    setEditingKey("");
  };

  // Save handler
  const save = async (custom: string) => {
    setLoading(true);
    const data = await form.validateFields();
    UpdateApi(custom, data).then((response) => {
      if (response.status === 200) {
        setEditingKey("");
        setNotification({
          type: "success",
          title: "Short link updated",
          message: "Your short link has been edited!",
        });
        loadData();
      } else {
        setNotification({
          type: "error",
          title: "Cannot update short link",
          message: "There is an error while updating a short link.",
        });
      }
      setLoading(false);
    });
  };

  /**
   * Table Column List of Array
   * use to define the column of table in short link list
   */
  const columns = [
    {
      title: "No",
      dataIndex: "index",
      key: "index",
      render: (id: number, render: ShortLinkItem, index: number): any => {
        ++index;
        return index;
      },
    },
    {
      title: "Short Link Name",
      dataIndex: "name",
      key: "name",
      editable: true,
    },
    {
      title: "Original Link",
      dataIndex: "origin",
      key: "origin",
      editable: true,
      render: (data: string) => (
        <Link href={data} target="_black">
          {data}
        </Link>
      ),
    },
    {
      title: "Custom Short Link",
      dataIndex: "custom",
      key: "custom",
      editable: true,
      render: (data: string) => (
        <Link href={`/${data}`} target="_black" className="p-0 m-0">
          https://link.dafkur.com/{data}
        </Link>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (data: string, record: ShortLinkItem) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.custom)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Typography.Link>Cancel</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Popconfirm
              placement="bottom"
              title={"Delete confirmation"}
              description={"Are you sure you want to delete this short link?"}
              onConfirm={() => onDeleteHandler(record.custom)}
              okText="Yes"
              cancelText="Cancel"
            >
              <Button
                disabled={editingKey !== ""}
                type="text"
                style={{ padding: "0 8px" }}
              >
                <Typography.Text type="danger">
                  <DeleteOutlined />
                </Typography.Text>
              </Button>
            </Popconfirm>
            <Button
              type="text"
              onClick={() => edit(record)}
              disabled={editingKey !== ""}
              style={{ padding: "0 8px" }}
            >
              <Typography.Text type="success">
                <EditOutlined />
              </Typography.Text>
            </Button>
          </>
        );
      },
    },
  ];

  const editableColumn = columns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: ShortLinkItem) => ({
        record,
        inputType:
          col.dataIndex === "custom"
            ? "custom"
            : col.dataIndex === "origin"
            ? "origin"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode =
      inputType === "custom" ? (
        <Input addonBefore={`https://link.dafkur.com/`} />
      ) : (
        <Input />
      );
    const rules: any =
      inputType === "origin"
        ? [
            {
              required: true,
              message: `Please Input ${title}!`,
            },
            {
              type: "url",
              message: `Please provide the valid link!`,
            },
          ]
        : [
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ];
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={rules}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  return (
    <>
      <Card>
        <Typography.Title level={4}>Short Link List</Typography.Title>
        <Typography.Paragraph>
          Your short link list you have been created. You can manage the link as
          you want.
        </Typography.Paragraph>
        <Form form={form}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            columns={editableColumn}
            dataSource={data}
            loading={loading}
          />
        </Form>
      </Card>
    </>
  );
}
