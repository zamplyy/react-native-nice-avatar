import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Avatar, { genConfig } from 'react-native-nice-avatar';

export default function App() {
  const config = genConfig();

  console.log('congig', config);
  return (
    <View style={styles.container}>
      <Text>Result: hejsan</Text>
      <Avatar style={{ height: 100, width: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
