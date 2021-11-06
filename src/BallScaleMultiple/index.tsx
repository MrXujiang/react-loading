import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

export default memo(
  ({
    text,
    style,
    color,
    size,
    textColor,
    textOffset,
    visible,
  }: ILoadingProp) => {
    return (
      <Loader
        text={text}
        style={style}
        visible={visible}
        textOffset={textOffset}
        textColor={textColor}
      >
        <div className="ball-scale-multiple">
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
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
