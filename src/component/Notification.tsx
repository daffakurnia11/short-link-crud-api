"use client";
import { globalNotif } from "@/utils/atom";
import { notification } from "antd";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { NotificationInstance } from "antd/es/notification/interface";
import { NotificationType } from "@/types/notification";

export default function Notification() {
  const notifData: NotificationType = useAtomValue(globalNotif);
  const [notif, contextNotif] = notification.useNotification();
  const openNotif = (
    type: NotificationInstance,
    title: string,
    message: string
  ): void => {
    notif[type]({
      message: title,
      description: message,
      placement: "topRight",
    });
  };

  useEffect(() => {
    if (notifData.type && notifData.title && notifData.message) {
      openNotif(notifData.type, notifData.title, notifData.message);
    }
  }, [notifData]);

  return contextNotif;
}
