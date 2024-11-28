import { toast } from "@/styles/commonStyle/toast";
import React, { useEffect } from "react";

type ToastProps = {
  message: string;
  variant?: "success" | "error" | "warning" | "info";
  size?: "small" | "medium" | "large";
  duration?: number;
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({
  message,
  variant = "info",
  size = "medium",
  duration = 2000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <div className={toast({ variant, size })}>{message}</div>;
};

export default Toast;
