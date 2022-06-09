import type { ViewStyle } from 'react-native';

export enum Sex{
	man = "man",
	woman = "woman"
}
export enum EarSize {
	small ='small',
	big = "big"	
}

export enum HairStyle{
	normal = "normal",
	thick = "thick",
	mohawk = "mohawk",
	womanLong = "womanLong",
	womanShort = "womanShort",
}

export enum HairStyleMan{
	normal = "normal",
	thick = "thick",
	mohawk = "mohawk"
}

export enum HairStyleWoman{
	normal = "normal",
	womanLong = "womanLong",
	womanShort = "womanShort"
}

export enum HatStyle{
	beanie = "beanie",
	turban = "turban",
	none = "none"
}

export enum EyeStyle{
	circle= "circle",
	oval = "oval",
	smile = "smile"
}

export enum GlassesStyle{
	round = "round",
	square = "square",
	none = "none"
}

export enum NoseStyle{
	short = "short",
	long = "long",
	round = "round"
}

export enum MouthStyle{
	laugh = "laugh",
	smile = "smile",
	peace = "peace"
}

export enum ShirtStyle{
	hoody = "hoody",
	short = "short",
	polo = "polo"
}

export enum EyeBrowStyle{
	up = "up",
	upWoman = "upWoman"
}

export interface AvatarConfig {
  sex?: Sex;
  faceColor?: string;
  earSize?: EarSize;
  hairColor?: string;
  hairStyle?: HairStyle;
  hairColorRandom?: boolean;
  hatColor?: string;
  hatStyle?: HatStyle;
  eyeStyle?: EyeStyle;
  glassesStyle?: GlassesStyle;
  noseStyle?: NoseStyle;
  mouthStyle?: MouthStyle;
  shirtStyle?: ShirtStyle;
  shirtColor?: string;
  bgColor?: string;
  isGradient?: boolean;
}

export interface AvatarFullConfig extends AvatarConfig {
  eyeBrowStyle?: EyeBrowStyle;
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
