import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Atoms/Toggle',
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};
