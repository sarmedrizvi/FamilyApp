import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignUpLayout from '../layout/SignUpLayout';
import NavBar from '../components/NavBar';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar title="Sign Up" leftButton="back" />
      <SignUpLayout />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
