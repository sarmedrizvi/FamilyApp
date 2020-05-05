import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import TextBox from '../components/TextBox';
import color from '../constant/color';

const SignUpLayout = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputs}>
          <TextBox placeholder={'User Name'} />
          <TextBox placeholder={'Email Address'} />
          <TextBox placeholder={'Password'} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.outerText}>
            By signing Up you accept our
            <Text style={styles.innerText}> Terms of Services </Text>
            and <Text style={styles.innerText}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Next" color={color.primary} />
      </View>
    </View>
  );
};

export default SignUpLayout;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  innerText: {
    color: color.primary,
  },
  outerText: {
    width: '70%',
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 10,
  },
  textInputs: {
    justifyContent: 'space-between',
  },
});
