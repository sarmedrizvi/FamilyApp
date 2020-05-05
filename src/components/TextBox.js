/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import color from '../constant/color';

const TextBox = props => {
  return (
    <View>
      <TextInput placeholder={props.placeholder} style={styles.Input} />
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  Input: {
    height: 40,
    borderBottomWidth: 1.4,
    borderColor: color.primary,
    marginHorizontal: 5,
    marginVertical: 9,
    textAlign: 'center',
  },
});
