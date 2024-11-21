import { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";
import { useNavigationStore } from "@/store/stores/navigation.store";

const MockNavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { setActiveTab } = useNavigationStore();
  setActiveTab("HomeIcon");
  return <>{children}</>;
};

const meta: Meta<typeof Navigation> = {
  title: "Components/Molcules/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <MockNavigationProvider>
        <Story />
      </MockNavigationProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
