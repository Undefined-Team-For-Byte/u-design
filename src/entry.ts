import { App } from "vue";
import demoButton from "./demoButton";

const components = [demoButton];

const install = (app: App) => {
  components.map((item) => {
    app.component(item.name, item);
  });
};

export default {
  install,
  ...components,
};
