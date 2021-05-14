import React from "react";
import Button from "rsuite/lib/Button";
import { Meta, storiesOf } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta;

storiesOf("Button", module).add("with text", () => {
  return <Button>Hello World!</Button>;
});

storiesOf("Button", module).add("with emoji", () => {
  return <Button>🎉😃🏉</Button>;
});

storiesOf("Button", module).add("in red", () => {
  return <Button color={"red"}>Hello in Red!</Button>;
});
