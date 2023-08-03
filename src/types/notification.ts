import { NotificationInstance } from "antd/es/notification/interface";

export type NotificationType = {
  type?: string | NotificationInstance,
  title?: string | undefined,
  message?: string | undefined,
}