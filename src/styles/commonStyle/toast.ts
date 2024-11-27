import { cva } from "@styled-system/css";

export const toast = cva({
  base: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1050,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: "8px",
    textStyle: "body2",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  variants: {
    variant: {
      success: {
        backgroundColor: "#e6f7e6",
        color: "#28a745",
        border: "1px solid #28a745",
      },
      error: {
        backgroundColor: "#fde8e8",
        color: "#d93025",
        border: "1px solid #d93025",
      },
      warning: {
        backgroundColor: "#fff4e5",
        color: "#ff9800",
        border: "1px solid #ff9800",
      },
      info: {
        backgroundColor: "#e8f4fd",
        color: "#1e88e5",
        border: "1px solid #1e88e5",
      },
    },
    size: {
      small: {
        width: "250px",
        fontSize: "14px",
      },
      medium: {
        width: "300px",
        fontSize: "16px",
      },
      large: {
        width: "350px",
        fontSize: "18px",
      },
    },
  },
  defaultVariants: {
    variant: "info",
    size: "medium",
  },
});
