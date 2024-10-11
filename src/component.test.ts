import { expect, test } from "vitest";
import { render } from "vitest-browser-svelte";
import { userEvent } from "@vitest/browser/context";

import Combobox from "./component.svelte";

test("keydown repro", async () => {
	const screen = render(Combobox);

	await userEvent.keyboard("[Tab]"); // focus input

	//   await userEvent.keyboard("{Alt>}{/Alt}"); // Okay. I released using `{/Alt}`
	await userEvent.keyboard("{Alt>}"); // Not okay. I didn't release `{Alt>}`

	await expect.element(screen.getByRole("combobox")).toHaveFocus();
});
