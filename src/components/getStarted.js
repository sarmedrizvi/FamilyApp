import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import color from '../constant/color';
import {useNavigation} from '@react-navigation/native';
const getStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Get Started"
          color={color.primary}
          onPress={() => navigation.navigate('SignUpEmail')}
        />
      </View>
      <View>
        <Text>
          Already have an account? <Text style={styles.login}>Log In</Text>
        </Text>
      </View>
    </View>
  );
};

export default getStarted;

const styles = StyleSheet.create({
  login: {
    color: color.primary,
  },
  container: {
    width: '100%',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  button: {
    padding: 10,
  },
});
