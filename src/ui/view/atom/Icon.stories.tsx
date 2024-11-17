import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Atoms/Icon',
  component: Icon,
  args: {
    iconName: 'HiHome',
    size: 24,
    color: 'currentColor',
    onClick: () => console.log('Icon clicked'),
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 6, max: 48 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};