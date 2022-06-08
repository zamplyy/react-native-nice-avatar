import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function eyebrowUp() {
  return (
    <Svg
      style={{
        position: 'absolute',
        width: '80%',
        height: '13%',
        top: 0,
      }}
      viewBox="0 0 149 48"
      fill="none"
    >
      <Path
        d="M99 10.2143C104.667 7.5476 118 5.11427 126 16.7143"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M23.5791 35.521C25.6497 29.6104 33.2612 18.3959 47.1418 20.8224"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
}
