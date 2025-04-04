import ParamsClientComponent from '@/components/ParamsClientComponent';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ParamsClientComponent',
  component: ParamsClientComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ParamsClientComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '', // usePathnameのモック
        query: {}, // useSearchParamsのモック
        segments: [], // useParamsのモック
      },
    },
  },
};

export const WithPathParams: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/products',
        query: {},
        segments: [],
      },
    },
  },
};

export const WithQueryParams: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '',
        query: {
          category: 'electronics',
          sort: 'price-asc',
        },
        segments: [],
      },
    },
  },
};

export const WithParams: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '',
        query: {},
        segments: [['userId', '123']],
      },
    },
  },
};

export const WithAllParams: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/category/products',
        segments: [['slug', 'category/products']],
        query: {
          page: '2',
          limit: '10',
          sort: 'newest',
        },
      },
    },
  },
};
