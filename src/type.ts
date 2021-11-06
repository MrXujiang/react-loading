import { ReactNode } from 'react';

export interface ILoadingProp {
  /**
   * @description   动画颜色
   * @default       "06c"
   */
  color?: string;
  /**
   * @description   动画元素大小
   * @default       -
   */
  size?: number;
  /**
   * @description   动画底部文本
   * @default       ""
   */
  text?: string;
  /**
   * @description   动画底部文本颜色
   * @default       ""
   */
  textColor?: string;
  /**
   * @description   动画底部文本距动画的间距
   * @default       0
   */
  textOffset?: number;
  /**
   * @description   动画可见性
   * @default       true
   */
  visible?: boolean;
  /**
   * @description   动画容器样式
   * @default       -
   */
  style?: React.CSSProperties | undefined;
  children?: ReactNode | Element;
}
