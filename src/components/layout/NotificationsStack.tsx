import { useCallback, useEffect, useState } from "react";

type NotificationsStackProps = {
  messages: Map<number, Notification>;
  onOut: Function;
};

export enum NotificationTypeEnum {
  information = "",
  success = "alert--success",
  error = "alert--error",
}

export type Notification = {
  type: NotificationTypeEnum;
  text: String | JSX.Element;
};

export const NotificationsStack = ({ messages, onOut }: NotificationsStackProps) => {
  const [outIds, setOutIds] = useState<{ [key: number]: boolean }>({});

  const out = useCallback(
    (key: number) => {
      outIds[key] = true;
      setOutIds({ ...outIds });
      setTimeout(() => {
        onOut(key);
      }, 500);
    },
    [onOut, outIds]
  );

  useEffect(() => {
    if (messages.size == 0) {
      return;
    }
    const int = setInterval(() => {
      messages.forEach((notification, key) => {
        if (notification.type !== NotificationTypeEnum.success) {
          return;
        }
        const diff = Date.now() - new Date(key).getTime();
        if (diff >= 7000) {
          // 7 sec
          out(key);
        }
      });
    }, 1000);

    return () => {
      window.clearInterval(int);
    };
  }, [messages, out]);

  return (
    <div className="notif-stack">
      {Array.from(messages).map((entry) => {
        const [key, message] = entry;
        return (
          <div
            className={`alert ${message.type} ${outIds[key] ? "out" : ""}`}
            key={key}
            onClick={() => out(key)}
          >
            {message.text}
          </div>
        );
      })}
    </div>
  );
};
