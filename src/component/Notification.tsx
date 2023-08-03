"use client";
import { globalNotif } from "@/utils/atom";
import { notification } from "antd";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { NotificationType } from "@/types/notification";

export default function Notification() {
  const notifData: any = useAtomValue(globalNotif);
  const [notif, contextNotif] = notification.useNotification();
  const openNotif = (type: string, title: string, message: string): void => {
    if (type === "success") {
      notif.success({
        message: title,
        description: message,
        placement: "topRight",
      });
    } else if (type === "error")
      notif.error({
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
