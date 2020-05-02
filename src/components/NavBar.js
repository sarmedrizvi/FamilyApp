import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBar from 'react-native-navbar';

const NavBar = props => {
  const {title, rightButton, leftButton} = props;
  const leftButtonConfig = {
    title: leftButton,
    //   handler: () => alert('hello!'),
  };
  const rightButtonConfig = {
    title: rightButton,
    //   handler: () => alert('hello!'),
  };

  const titleConfig = {
    title: title,
    style: {
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationBar
      containerStyle={styles.navBar}
      title={titleConfig}
      leftButton={leftButtonConfig}
      rightButton={rightButtonConfig}
    />
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
    paddingVertical: 10,
  },
});
