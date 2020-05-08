import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import SignUpLayout from '../layout/SignUpLayout';
// import NavBar from '../components/NavBar';
import SignInLayout from '../layout/SignInLayout';
const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      {/* <NavBar title="Sign Up" leftButton="Back" /> */}
      <SignInLayout />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
