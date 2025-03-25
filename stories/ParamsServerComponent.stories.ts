import type { Meta, StoryObj } from '@storybook/react';
import ParamsServerComponent from '../components/ParamsServerComponent';

const meta = {
  title: 'Components/ParamsServerComponent',
  component: ParamsServerComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    params: new Promise((resolve) => {
      resolve({
        slug: 'example-path',
      });
    }),
    searchParams: new Promise((resolve) => {
      resolve({
        query: 'search-term',
        filter: 'active',
      });
    }),
  },
} satisfies Meta<typeof ParamsServerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NoParamsAndSearchParams: Story = {
  args: {
    params: new Promise((resolve) => {
      resolve({});
    }),
    searchParams: new Promise((resolve) => {
      resolve({});
    }),
  },
};

export const WithPathParams: Story = {
  args: {
    params: new Promise((resolve) => {
      resolve({
        slug: 'products',
      });
    }),
    searchParams: new Promise((resolve) => {
      resolve({
      });
    }),
  },
};

export const WithQueryParams: Story = {
  args: {
    params: new Promise((resolve) => {
      resolve({
      
      });
    }),
    searchParams: new Promise((resolve) => {
      resolve({
        category: 'electronics',
        sort: 'price-asc',
      });
    }),
  },
};

export const WithBothParams: Story = {
  args: {
    params: new Promise((resolve) => {
      resolve({
        slug: 'category/products',
      });
    }),
    searchParams: new Promise((resolve) => {
      resolve({
        page: '2',
        limit: '10',
        sort: 'newest',
      });
    }),
  },
}; 