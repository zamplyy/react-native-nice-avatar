import React from 'react';
import chroma from 'chroma-js';

import Hoody from './hoody';
import Short from './short';
import Polo from './polo';
import type { ShirtStyleType } from 'src/types';

export default function shirt(props: { color: string; style: ShirtStyleType }) {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();
  switch (style) {
    case 'hoody':
      return <Hoody color={color} lightColor={secondColor} />;
    case 'polo':
      return <Polo color={color} lightColor={secondColor} />;
    case 'short':
    default:
      return <Short color={color} />;
  }
}
