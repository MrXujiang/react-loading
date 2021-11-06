import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-loading',
  favicon: 'http://h5.dooring.cn/uploads/logo_1742fd359da.png',
  logo: 'http://h5.dooring.cn/uploads/logo_1742fd359da.png',
  outputPath: '../../dooring-bs/server/static/react-loading',
  base: '/react-loading/',
  publicPath: '/react-loading/',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
