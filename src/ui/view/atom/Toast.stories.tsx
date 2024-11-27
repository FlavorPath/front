import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toast from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    message: { control: "text", defaultValue: "This is a toast message!" },
    variant: {
      control: "radio",
      options: ["success", "error", "warning", "info"],
      defaultValue: "info",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    duration: { control: "number", defaultValue: 3000 },
  },
} as Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = (args) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(true)}>Show Toast</button>
      {visible && <Toast {...args} onClose={() => setVisible(false)} />}
    </>
  );
};

// 기본 Toast
export const Default = Template.bind({});

// 성공 메시지 Toast
export const Success = Template.bind({});
Success.args = {
  variant: "success",
  message: "This is a success message!",
};

// 오류 메시지 Toast
export const Error = Template.bind({});
Error.args = {
  variant: "error",
  message: "This is an error message!",
};

// 경고 메시지 Toast
export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  message: "This is a warning message!",
};

// 정보 메시지 Toast
export const Info = Template.bind({});
Info.args = {
  variant: "info",
  message: "This is an info message!",
};

// 작은 크기의 Toast
export const Small = Template.bind({});
Small.args = {
  size: "small",
};

// 중간 크기의 Toast
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

// 큰 크기의 Toast
export const Large = Template.bind({});
Large.args = {
  size: "large",
};
