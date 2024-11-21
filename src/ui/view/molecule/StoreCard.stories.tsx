import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import StoreCard from './StoreCard';

const meta: Meta<typeof StoreCard> = {
  title: 'Components/Molcules/StoreCard',
  component: StoreCard,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
	],
	args: {
		imageUrl: 'https://images.unsplash.com/photo-1730125477357-03a906bde005?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		keywords: ['라면', '한식', '중식'], 
		storeName: '홀짝집',
		storeAddress: '서울 송파구 백제고분로 69 (잠실동)',
		searchText: '라면'
	}
};

export default meta;
type Story = StoryObj<typeof StoreCard>;

export const Default: Story = {};
