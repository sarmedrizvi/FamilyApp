import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import TextBox from '../components/TextBox';
import color from '../constant/color';
import {db, auth} from '../../plugins/firebase';

const SignUpLayout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user.user.uid);
        // const userEntered = db.ref(`customers/${userName}`);
      })
      .catch(err => {
        alert(err);
      });

    // .then(res => {
    //   setEmail('');
    //   setUserName('');
    //   setPassword('');
    // });
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputs}>
          <TextBox
            placeholder={'Email Address'}
            onChangeText={event => setEmail(event)}
          />
          <TextBox
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={event => setPassword(event)}
          />
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
        <Button title="Next" color={color.primary} onPress={onSignUp} />
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
