import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: { control: "boolean", defaultValue: true },
    size: {
      control: "radio",
      options: ["small", "large"],
      defaultValue: "small",
    },
    title: { control: "text", defaultValue: "Modal Title" },
    children: { control: "text", defaultValue: "This is modal content." },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff8700",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Open Modal
      </button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

// 기본 Modal
export const Default = Template.bind({});

// 작은 크기 Modal
export const Small = Template.bind({});
Small.args = {
  size: "small",
  title: "Small Modal",
  children: "This is a small modal.",
};

// 큰 크기 Modal
export const Large = Template.bind({});
Large.args = {
  size: "large",
  title: "Large Modal",
  children: "This is a large modal.",
};

// 모달에 버튼 추가
export const WithButtons = Template.bind({});
WithButtons.args = {
  size: "large",
  title: "Modal with Buttons",
  children: (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        style={{
          padding: "10px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Cancel
      </button>
      <button
        style={{
          padding: "10px",
          backgroundColor: "#ff8700",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Confirm
      </button>
    </div>
  ),
};
