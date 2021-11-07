## 技术实现

`@alex_xu/react-loading` 是基于 `loaders.css` 二次封装的 `React` 加载动画组件库, 帮你轻松的在项目中使用不同风格的加载动画.

![demo.gif](http://cdn.dooring.cn/dr/react-loading.gif)

从技术上, 为了让使用者使用的更轻量简单, 我将 `loaders.css` 的每个动画样式和元素拆成了一个个动画组件, 并设计了相对灵活的 `api` 接口, 使得开发者可以更简单高效的使用, 如下:

<API></API>

### 组件设计

该动画组件库采用 `React Hooks` 和 `Typescript` 实现, 分为 `Loader` 容器 和 `Spining` .

`Loader` 容器主要是对加载动画做整体封装, 使得我们对 `Spining` 动画组件的使用更简单, `Spining` 主要提供动画 “骨架” . `Loader` 具体实现如下:

```tsx | pure
import React from 'react';
import { ILoadingProp } from '../type';
import './index.less';

const Loader: React.FC<ILoadingProp> = ({
  text,
  visible = true,
  textOffset,
  textColor,
  style,
  children,
}) => {
  return visible ? (
    <div className="react-loader-wrap" style={style}>
      {children}
      {!!text && (
        <div
          className="react-loader-text-tip"
          style={{ marginTop: `${textOffset}px`, color: textColor }}
        >
          {' '}
          {text}{' '}
        </div>
      )}
    </div>
  ) : null;
};

export default Loader;
```

`Spining` 动画组件主要是具体的动画内容, 这里我选取了 10 余种动画进行封装, 我举一个 `BallBeat` 的例子:

```tsx | pure
import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

export default memo(
  ({ text, style, color, textColor, size, visible }: ILoadingProp) => {
    return (
      <Loader text={text} style={style} visible={visible} textColor={textColor}>
        <div className="ball-scale">
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
        </div>
      </Loader>
    );
  },
);
```

在项目中具体使用方式如下:

```jsx | pure
import { BallPulse, BallClipRotate, SquareSpin } from '@alex_xu/react-loading';

export default () => <BallClipRotate text="H5-Dooring" />;
```

按需导入配置:

```js
extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alex_xu/react-loading',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        style: true,
      },
    ],
  ],
```
