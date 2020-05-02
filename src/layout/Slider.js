import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyCarousel from '../components/MyCarousel';
import GetStarted from '../components/getStarted';

const Slider = () => {
  return (
    <View style={styles.container}>
      <MyCarousel />
      <GetStarted />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});
