import type { ViewStyle } from 'react-native';

export const Sex = {
  man: 'man',
  woman: 'woman',
} as const;

export const EarSize = {
  small: 'small',
  big: 'big',
} as const;

export const HairStyle = {
  normal: 'normal',
  thick: 'thick',
  mohawk: 'mohawk',
  womanLong: 'womanLong',
  womanShort: 'womanShort',
} as const;

export const HairStyleMan = {
  normal: 'normal',
  thick: 'thick',
  mohawk: 'mohawk',
} as const;

export const HairStyleWoman = {
  normal: 'normal',
  womanLong: 'womanLong',
  womanShort: 'womanShort',
} as const;

export const HatStyle = {
  beanie: 'beanie',
  turban: 'turban',
  none: 'none',
} as const;

export const EyeStyle = {
  circle: 'circle',
  oval: 'oval',
  smile: 'smile',
} as const;

export const GlassesStyle = {
  round: 'round',
  square: 'square',
  none: 'none',
} as const;

export const NoseStyle = {
  short: 'short',
  long: 'long',
  round: 'round',
} as const;

export const MouthStyle = {
  laugh: 'laugh',
  smile: 'smile',
  peace: 'peace',
} as const;

export const ShirtStyle = {
  hoody: 'hoody',
  short: 'short',
  polo: 'polo',
} as const;

export const EyeBrowStyle = {
  up: 'up',
  upWoman: 'upWoman',
} as const;

export type SexType = typeof Sex[keyof typeof Sex];
export type EarSizeType = typeof EarSize[keyof typeof EarSize];
export type HatStyleType = typeof HatStyle[keyof typeof HatStyle];
export type HairStyleType = typeof HairStyle[keyof typeof HairStyle];
export type HairStyleManType = typeof HairStyleMan[keyof typeof HairStyleMan];
export type HairStyleWomanType =
  typeof HairStyleWoman[keyof typeof HairStyleWoman];
export type EyeStyleType = typeof EyeStyle[keyof typeof EyeStyle];
export type GlassesStyleType = typeof GlassesStyle[keyof typeof GlassesStyle];
export type NoseStyleType = typeof NoseStyle[keyof typeof NoseStyle];
export type MouthStyleType = typeof MouthStyle[keyof typeof MouthStyle];
export type ShirtStyleType = typeof ShirtStyle[keyof typeof ShirtStyle];
export type EyeBrowStyleType = typeof EyeBrowStyle[keyof typeof EyeBrowStyle];

export interface AvatarConfig {
  sex?: SexType;
  faceColor?: string;
  earSize?: EarSizeType;
  hairColor?: string;
  hairStyle?: HairStyleType;
  hairColorRandom?: boolean;
  hatColor?: string;
  hatStyle?: HatStyleType;
  eyeStyle?: EyeStyleType;
  glassesStyle?: GlassesStyleType;
  noseStyle?: NoseStyleType;
  mouthStyle?: MouthStyleType;
  shirtStyle?: ShirtStyleType;
  shirtColor?: string;
  bgColor?: string;
  isGradient?: boolean;
}

export interface AvatarFullConfig extends AvatarConfig {
  eyeBrowStyle?: EyeBrowStyleType;
}

export interface NiceAvatarProps extends AvatarConfig {
  style?: ViewStyle;
  shape?: 'circle' | 'rounded' | 'square';
  size: number;
}

export type GenConfigFunc = (
  config?: AvatarFullConfig
) => Required<AvatarFullConfig>;

export declare const genConfig: GenConfigFunc;
