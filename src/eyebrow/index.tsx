import React from 'react';
import type { EyeBrowStyleType } from 'src/types';

import Up from './up';
import UpWoman from './upWoman';

export default function eyebrow(props: { style: EyeBrowStyleType }) {
  const { style } = props;
  switch (style) {
    case 'upWoman':
      return <UpWoman />;
    case 'up':
    default:
      return <Up />;
  }
}
