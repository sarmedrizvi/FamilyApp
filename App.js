import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from './src/screens/StartScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import SignInScreen from './src/screens/LoginScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="startScreen"
            component={StartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUpEmail"
            component={SignUpScreen}
            options={{
              title: 'Sign Up',
              headerTitleAlign: 'center',
              headerBackImage: () => (
                <FontAwesome5Icon
                  name="times"
                  title="Info"
                  color="black"
                  size={15}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Login In"
            component={SignInScreen}
            options={{
              title: 'Login',
              headerTitleAlign: 'center',
              headerBackImage: () => (
                <FontAwesome5Icon
                  name="times"
                  title="Info"
                  color="black"
                  size={15}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
