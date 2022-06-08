import React from 'react';
import chroma from 'chroma-js';
import Svg, { Path } from 'react-native-svg';

export default function hairMohawk(props: {
  color: string;
  colorRandom: boolean;
}) {
  const { color, colorRandom } = props;
  const mainColor = (colorRandom && color) || '#171921';
  const subColor =
    (colorRandom && chroma(color).brighten(2).hex()) || '#717376';
  return (
    <Svg
      style={{
        position: 'absolute',
        bottom: '40.8%',
        width: '97.6%',
        height: '63.5%',
        left: '-1.8%',
      }}
      viewBox="0 0 240 203"
      fill="none"
    >
      <Path
        opacity="0.35"
        d="M187.986 80.1756C179.986 73.7756 166.153 73.1758 160.486 73.6758L152.486 47.1758C166.086 50.3758 184.486 71.1758 187.986 80.1756Z"
        fill={subColor}
        stroke={subColor}
        strokeWidth="1"
      />
      <Path
        d="M85.7923 14.7636C85.7923 14.7636 91.5301 10.802 115.746 4.70097C139.963 -1.40007 148.792 0.983287 148.792 0.983287L160.581 73.815C160.581 73.815 152.542 73.6416 132.548 78.0085C112.555 82.3754 102.986 87.6748 102.986 87.6748L85.7923 14.7636Z"
        fill={mainColor}
      />
      <Path
        d="M48.9855 89.6758C42.1855 48.0758 72.3188 21.5091 85.9855 14.1758L102.985 87.6758C83.7855 48.0758 57.6521 72.5091 48.9855 89.6758Z"
        fill={mainColor}
      />
      <Path
        opacity="0.35"
        d="M67.4855 133.675C60.2855 106.475 89.4855 91.8415 102.985 87.6749C95.9855 71.3415 79.9854 56.6749 60.4854 74.6756C42.4854 105.175 49.4855 128.676 54.9855 146.675L67.4855 133.675Z"
        fill={subColor}
        stroke={subColor}
        strokeWidth="1"
      />
    </Svg>
  );
}
