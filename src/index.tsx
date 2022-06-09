/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View } from 'react-native';

import type { NiceAvatarProps } from './types';

import { genConfig } from './utils';

import Face from './face';
import Hair from './hair';
import Hat from './hat';
import Ear from './ear';
import Eyebrow from './eyebrow';
import Eye from './eyes';
import Glasses from './glasses';
import Nose from './nose';
import Mouth from './mouth';
import Shirt from './shirt';

const ReactNiceAvatar: FC<NiceAvatarProps> = (props) => {
  const {
    style,
    shape = 'circle',
    hairColorRandom = false,
    size = 100,
  } = props;
  const config = genConfig(props);

  // Background shape
  let borderRadius;
  switch (shape) {
    case 'circle': {
      borderRadius = 999;
      break;
    }
    case 'rounded': {
      borderRadius = 6;
      break;
    }
    case 'square': {
      borderRadius = 0;
      break;
    }
  }
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: config.bgColor,
        borderRadius,
        overflow: 'hidden',
        ...style,
      }}
    >
      <View
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '90%',
          }}
        >
          <Face color={config.faceColor} />
          <Hat color={config.hatColor} style={config.hatStyle} />
          {config.hatStyle === 'none' && (
            <Hair
              color={config.hairColor}
              style={config.hairStyle}
              colorRandom={hairColorRandom}
            />
          )}

          {/* Face detail */}
          <View
            style={{
              position: 'absolute',
              right: '-3%',
              top: '30%',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Eyebrow style={config.eyeBrowStyle} />
            <Eye style={config.eyeStyle} />
            <Glasses style={config.glassesStyle} />
            <Ear color={config.faceColor} size={config.earSize} />
            <Nose style={config.noseStyle} />
            <Mouth style={config.mouthStyle} />
          </View>

          <Shirt color={config.shirtColor} style={config.shirtStyle} />
        </View>
      </View>
    </View>
  );
};

export default ReactNiceAvatar;

export { genConfig } from './utils';
export * from './types';
