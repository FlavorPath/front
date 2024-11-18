import { Meta, StoryObj } from "@storybook/react";
import NavigationItem from "./NavigationItem";

const meta: Meta<typeof NavigationItem> = {
  title: "Components/Molecules/NavigationItem",
  component: NavigationItem,
  argTypes: {
    iconName: {
      control: {
        type: "select",
        options: ["HomeIcon", "HandThumbUpIcon", "BookmarkIcon", "UserIcon"],
      },
    },
    label: {
      control: "text",
    },
    isActive: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationItem>;

export const Default: Story = {
  args: {
    iconName: "HomeIcon",
    label: "홈",
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    iconName: "HomeIcon",
    label: "홈",
    isActive: true,
  },
};

export const Recommended: Story = {
  args: {
    iconName: "HandThumbUpIcon",
    label: "추천",
    isActive: false,
  },
};

export const Bookmark: Story = {
  args: {
    iconName: "BookmarkIcon",
    label: "스크랩",
    isActive: false,
  },
};

export const Profile: Story = {
  args: {
    iconName: "UserIcon",
    label: "내 정보",
    isActive: true,
  },
};
