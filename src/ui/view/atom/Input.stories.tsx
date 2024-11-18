import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Atoms/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '아이디를 입력해 주세요.',
  },
};

export const Password: Story = {
	args: {
		type: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
  },
};
