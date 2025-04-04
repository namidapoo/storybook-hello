import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import { Page } from "./Page";

const meta = {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

export const LogoutTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // まずログイン
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await userEvent.click(loginButton);

    // ログアウトボタンをクリック
    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
    await userEvent.click(logoutButton);

    // ログアウト後はログインボタンが表示される
    const newLoginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(newLoginButton).toBeInTheDocument();
  },
};

// テストカバレッジ向上のためにアカウント作成機能をテスト
export const CreateAccountTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // アカウント作成ボタンを探してクリック
    const createAccountButton = canvas.getByRole("button", {
      name: /Sign up/i,
    });
    await expect(createAccountButton).toBeInTheDocument();
    await userEvent.click(createAccountButton);

    // アカウント作成後はログアウトボタンが表示される
    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
