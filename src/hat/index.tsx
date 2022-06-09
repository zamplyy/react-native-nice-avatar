import React from 'react';

import Turban from './turban';
import Beanie from './beanie';
import type { HatStyleType } from 'src/types';

export default function hat(props: { color: string; style: HatStyleType }) {
  const { style, color } = props;
  switch (style) {
    case 'beanie':
      return <Beanie color={color} />;
    case 'turban':
      return <Turban color={color} />;
    case 'none':
    default:
      return null;
  }
}
