import demoButton from "..";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("demoButton", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(demoButton, {
      slots: {
        default: "demoButton",
      },
    });
    expect(wrapper.text()).toBe("demoButton");
  });
});
