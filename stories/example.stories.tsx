import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import Home from "./example";

const meta: Meta<typeof Home> = {
	title: "Pages/Home",
	component: Home,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByAltText("Next.js logo")).toBeInTheDocument();
		await expect(
			canvas.getByText(/Get started by editing/i),
		).toBeInTheDocument();
		await expect(canvas.getByText("Deploy now")).toBeInTheDocument();
	},
};
