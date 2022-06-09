# react-native-nice-avatar

[![Version](http://img.shields.io/npm/v/@zamplyy/react-native-nice-avatar.svg)](https://www.npmjs.org/package/@zamplyy/react-native-nice-avatar)
[![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/@zamplyy/react-native-nice-avatar.svg?style=flat-square
[download-url]: https://npmjs.org/package/@zamplyy/react-native-nice-avatar

<div align="center">
        <img src="https://user-images.githubusercontent.com/5305874/131275587-a6f44325-cb18-4a1c-8a1c-785942e751e7.png" 
             width="600" alt="imagewall" />
</div>

React Nice avatars but for React Native 📱

## Credits

This package is basically a fork from [react-nice-avatar](react-nice-avatar), but intended for React Native.

## Installation

```sh
npm install @zamplyy/react-native-nice-avatar
```

or

(recommended)

```sh
yarn add @zamplyy/react-native-nice-avatar
```

## Usage

1. Import the component.
   ```js
   import Avatar, { genConfig } from '@zamplyy/react-native-nice-avatar';
   ```
2. Generate a random configuration, save it so that you can always rendering a same avatar with the configuration.

   ```js
   const config = genConfig(AvatarConfig?)
   ```

   `tip`: AvatarConfig is an Object, please check the **Options** below for what attributes can be passed in

3. Render the component with specific width / height and configuration.

   ```jsx
   <Avatar style={{ width: 50, height: 50 }} {...config} />
   ```

   or

   ```jsx
   <Avatar size={50} {...config} />
   ```

## Options

The options can be passed into genConfig or as React props

| key               | type      | default | accept                                       | tips                               |
| ----------------- | --------- | ------- | -------------------------------------------- | ---------------------------------- |
| `style`           | ViewStyle |         |                                              | Only for React Props               |
| `size`            | number    |         |                                              | Only for React Props               |
| `shape`           | string    | circle  | circle, rounded, square                      | Only for React Props               |
| `sex`             | string    |         | man, woman                                   |                                    |
| `faceColor`       | string    |         |                                              |                                    |
| `earSize`         | string    |         | small, big                                   |                                    |
| `hairColor`       | string    |         |                                              |                                    |
| `hairStyle`       | string    |         | normal, thick, mohawk, womanLong, womanShort |                                    |
| `hairColorRandom` | boolean   | false   |                                              | thick,mohawk default only be black |
| `hatColor`        | string    |         |                                              |                                    |
| `hatStyle`        | string    |         | none, beanie, turban                         | Usually is none                    |
| `eyeStyle`        | string    |         | circle, oval, smile                          |                                    |
| `glassesStyle`    | string    |         | none, round, square                          | Usually is none                    |
| `noseStyle`       | string    |         | short, long, round                           |                                    |
| `mouthStyle`      | string    |         | laugh, smile, peace                          |                                    |
| `shirtStyle`      | string    |         | hoody, short, polo                           |                                    |
| `shirtColor`      | string    |         |                                              |                                    |
| `bgColor`         | string    |         |                                              |                                    |
| `isGradient`      | boolean   | false   |                                              |                                    |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Assets

- Designer: [@Micah](https://www.figma.com/@Micah) on Figma
- Figma files: [Avatar Illustration System](https://www.figma.com/community/file/829741575478342595)
