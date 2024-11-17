import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Molcules/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const Text: Story = {
	args: {
		headerText: '로그인'
	}
};
