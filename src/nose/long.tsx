import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function noseLong() {
  return (
    <Svg
      style={{
        width: '10%',
        height: '10%',
        position: 'absolute',
        top: '15%',
        left: '46%',
      }}
      viewBox="0 0 32 40"
      fill="none"
    >
      <Path
        d="M16.5 3C16.5 17 23.5 28 23.5 28C23.5 28 20 34 10 32"
        stroke="#171921"
        strokeWidth="4"
      />
    </Svg>
  );
}
