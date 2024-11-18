import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'filled',
    size: 'large',
  },
  render: args => <Button {...args}>텍스트</Button>,
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'large',
  },
  render: (args) => <Button {...args}>텍스트</Button>
};

export const Small: Story = {
  args: {
    variant: 'outlined',
    size: 'small',
  },
  render: args => <Button {...args}>텍스트</Button>,
};