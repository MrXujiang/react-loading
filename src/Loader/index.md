### 基本使用:

```tsx
import React from 'react';
import { message, Button } from 'antd';
import {
  BallPulse,
  BallClipRotate,
  LineScale,
  LineScalePulseOut,
} from 'react-loading';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const list = [
  {
    c: <BallPulse text="ball-pulse" />,
    t: `<BallPulse text="ball-pulse" />`,
  },
  {
    c: <BallClipRotate text="ball-clip-rotate" />,
    t: `<BallClipRotate text="ball-clip-rotate" />`,
  },
  {
    c: <LineScalePulseOut text="line-scale-pulse-out" />,
    t: `<LineScalePulseOut text="line-scale-pulse-out" />`,
  },
  {
    c: <LineScale text="line-scale" />,
    t: `<LineScale text="line-scale" />`,
  },
];

export default () => {
  return (
    <div>
      {list.map((v) => {
        return (
          <CopyToClipboard
            key={v.t}
            text={v.t}
            onCopy={() => {
              message.success('已复制到剪切板');
            }}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                width: '160px',
                height: '100px',
              }}
            >
              {v.c}
            </div>
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```

### 改变加载动画颜色, 大小, 文本:

```tsx
import React from 'react';
import { message, Button } from 'antd';
import {
  BallPulse,
  BallClipRotate,
  LineScale,
  LineScalePulseOut,
} from 'react-loading';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const list = [
  {
    c: <BallPulse text="ball-pulse" color="green" />,
    t: `<BallPulse text="ball-pulse" />`,
  },
  {
    c: <BallClipRotate text="H5-Dooring" color="orange" />,
    t: `<BallClipRotate text="H5-Dooring" />`,
  },
  {
    c: <LineScalePulseOut text="line-scale-pulse-out" color="#ED3333" />,
    t: `<LineScalePulseOut text="line-scale-pulse-out" />`,
  },
  {
    c: <LineScale text="H5-Dooring" textColor="blue" />,
    t: `<LineScale text="H5-Dooring" />`,
  },
];

export default () => {
  return (
    <div>
      {list.map((v) => {
        return (
          <CopyToClipboard
            key={v.t}
            text={v.t}
            onCopy={() => {
              message.success('已复制到剪切板');
            }}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                width: '160px',
                height: '100px',
              }}
            >
              {v.c}
            </div>
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```

<API></API>
