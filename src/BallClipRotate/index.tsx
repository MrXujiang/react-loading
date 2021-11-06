import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

export default memo(
  ({ text, style, color, textColor, size, visible }: ILoadingProp) => {
    return (
      <Loader text={text} style={style} visible={visible} textColor={textColor}>
        <div className="ball-clip-rotate">
          <div
            style={{
              backgroundColor: color,
              borderColor: color,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
        </div>
      </Loader>
    );
  },
);
