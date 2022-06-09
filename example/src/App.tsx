import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Avatar, { genConfig } from '@zamplyy/react-native-nice-avatar';
export default function App() {
  const config = genConfig();

  console.log('congig', config);
  return (
    <View style={styles.container}>
      <Avatar size={50} {...config} />
      <Avatar size={120} {...config} />
      <Avatar size={150} />
      <Avatar size={150} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
