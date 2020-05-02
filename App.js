import * as React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

import StartScreen from './src/screens/StartScreen';
import SignUpScreen from './src/screens/SignUpScreen';
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.app}>
        {/* <StartScreen /> */}
        <SignUpScreen />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  app: {flex: 1},
});
