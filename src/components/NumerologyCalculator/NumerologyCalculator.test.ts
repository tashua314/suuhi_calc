/**
 * This code was generated by Builder.io.
 */
import { render } from "@testing-library/svelte";
import { expect, test } from "vitest";
import NumerologyCalculator from "./NumerologyCalculator.svelte";

test("renders NumerologyCalculator component", () => {
  const { getByText } = render(NumerologyCalculator);
  expect(getByText("かんたん数秘術計算機")).toBeTruthy();
});
