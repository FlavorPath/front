import Toast from "@/ui/view/atom/Toast";
import { useState } from "react";

type ClipboardCopyProps = {
  text: string;
};

const ClipboardCopy = ({ text }: ClipboardCopyProps) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage("복사가 완료되었습니다!");
    } catch (error) {
      setToastMessage("복사 실패!");
    }

    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  return (
    <div style={{ display: "inline-block", marginLeft: "10px" }}>
      <button
        onClick={handleCopyToClipboard}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#ff8700",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        복사
      </button>
      {toastMessage && (
        <Toast
          message={toastMessage}
          variant="success"
          size="small"
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default ClipboardCopy;
