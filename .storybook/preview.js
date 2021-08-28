export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


import '../stories/global-style/antd/index.less'
import '../stories/global-style/antd-mobile/index.less'
