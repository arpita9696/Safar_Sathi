import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignUpPress = () => {
    navigation.navigate('DriverRegistrationForm');
  };
  const onLoginPress = () => {
    console.log('first');
  };
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 50}}>
        <TextInput
          placeholder="Enter your mail"
          value={email}
          placeholderTextColor={'grey'}
          onChangeText={text => setEmail(text)}
          style={{
            color: 'black',
            borderColor: 'black',
            borderWidth: 0.6,
            marginHorizontal: '10%',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          placeholderTextColor={'grey'}
          onChangeText={text => setPassword(text)}
          style={{
            color: 'black',
            borderColor: 'black',
            borderWidth: 0.6,
            marginHorizontal: '10%',
            marginVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
          maxLength={8}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => onLoginPress()}
          style={{
            padding: 10,
            backgroundColor: 'lightblue',
            marginHorizontal: '10%',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSignUpPress}
          style={{
            padding: 10,
            backgroundColor: 'lightblue',
            marginHorizontal: '10%',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
