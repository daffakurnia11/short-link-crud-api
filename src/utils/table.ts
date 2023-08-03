import { ColumnObjectType } from "@/types/table";
import { ColumnsType } from "antd/es/table";

/**
 * Table Column List of Array
 * use to define the column of table in short link list
 */
export const tableColumn: ColumnsType<ColumnObjectType> = [
  {
    title: "No",
    dataIndex: "index",
    key: "index",
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