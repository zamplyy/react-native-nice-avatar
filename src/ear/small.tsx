import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export default function earSmall(props: SvgProps) {
  const { color, ...rest } = props;
  return (
    <Svg
      width={48}
      height={48}
      fill="none"
      style={{
        position: 'absolute',
        width: '16%',
        height: '15%',
        top: '13%',
        left: '19.8%',
      }}
      {...rest}
    >
      <Path
        d="M30.5 6.176A23.778 23.778 0 0 0 23.08 5c-10.493 0-19 6.5-18 18.5 1.042 12.5 8.507 17 19 17 1.168 0 2.31-.102 3.42-.299 1.21-.214 2.381-.54 3.5-.966"
        stroke="#171921"
      />
      <Path
        d="M31.5 39.036a19.382 19.382 0 0 1-7.42 1.464c-10.493 0-17.958-4.5-19-17-1-12 7.507-18.5 18-18.5 3.138 0 6.187.606 8.92 1.73l-.5 32.306Z"
        fill={color}
      />
      <Path d="M27.5 13.5c-4-1.833-12.8-2.8-16 8" stroke="#171921" />
      <Path d="M17 14c2.167 1.833 6.3 7.5 5.5 15.5" stroke="#171921" />
    </Svg>
  );
}
