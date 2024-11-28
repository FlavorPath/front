import { modal, modalContent } from "@/styles/commonStyle/modal";
import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean; // 모달 표시 여부
  onClose: () => void; // 닫기 버튼 또는 외부 클릭 시 실행될 핸들러
  size?: "small" | "large"; // 모달 크기
  title?: string; // 모달 제목
  children?: ReactNode; // 모달 내용
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = "small",
  title,
  children,
}) => {
  if (!isOpen) return null;

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).dataset.modal) {
      onClose();
    }
  };

  return (
    <div className={modal()} data-modal="true" onClick={handleClickOutside}>
      <div className={modalContent({ size })}>
        {title && <h3>{title}</h3>}
        {children}
        <div className="button_grp">
          <button
            className="cancel_btn"
            onClick={onClose}
            style={{
              backgroundColor: "#f5f5f5",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
          <button
            className="save_btn"
            onClick={onClose}
            style={{
              backgroundColor: "#ff8700",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
