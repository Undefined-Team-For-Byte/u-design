import { demoBlockPlugin } from "vitepress-theme-demoblock"

export default {
  title: "U Design",
  description: "A component library from Undefined Team",
  themeConfig: {
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text:"安装",
              link:"/guild/install/"
            },
            {
              text:"演示",
              link:"/guild/demo/"
            }
          ]
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
};
