import React from 'react';

import Laugh from './laugh';
import Smile from './smile';
import Peace from './peace';
import type { MouthStyle } from 'src/types';

export default function mouth(props: { style: MouthStyle }) {
  const { style } = props;
  switch (style) {
    case 'laugh':
      return <Laugh />;
    case 'smile':
      return <Smile />;
    case 'peace':
    default:
      return <Peace />;
  }
}
