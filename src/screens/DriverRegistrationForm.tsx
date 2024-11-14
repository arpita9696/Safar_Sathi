import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {appStateSelectors, useAuthState} from '../state/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DriverRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('male');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [insuranceNumber, setInsuranceNumber] = useState('');
  const [insuranceExpiry, setInsuranceExpiry] = useState('');
  const [photo, setPhoto] = useState<any>(null);
  useAuthState();
  const setAuthenticated = useAuthState<any>(
    appStateSelectors.setAuthenticated,
  );
  const handleFormSubmit = () => {
    if (
      name === '' ||
      email === '' ||
      password === ''
      // phone === '' ||
      // address === '' ||
      // dob === '' ||
      // licenseNumber === '' ||
      // vehicleNumber === '' ||
      // vehicleModel === '' ||
      // vehicleRegistration === '' ||
      // insuranceNumber === '' ||
      // insuranceExpiry === ''
    ) {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      setAuthenticated(true);
      AsyncStorage.setItem('login', 'true');
      Alert.alert(
        'Form Submitted',
        'Driver registration form submitted successfully!',
      );
      // Here you can add code to submit the form data to your backend or perform further actions
    }
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0].uri);
      }
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Driver Registration Form</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {/* <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        /> */}

        {/* <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={dob}
          onChangeText={setDob}
          keyboardType="default"
        /> */}

        {/* <TouchableOpacity
          style={styles.photoButton}
          onPress={handleChoosePhoto}>
          <Text style={styles.photoButtonText}>Upload your photo</Text>
        </TouchableOpacity>
        {photo && <Image source={{uri: photo}} style={styles.photo} />}

        <TextInput
          style={styles.input}
          placeholder="Driver's License Number"
          value={licenseNumber}
          onChangeText={setLicenseNumber}
        />

        <TextInput
          style={styles.input}
          placeholder="Vehicle Number"
          value={vehicleNumber}
          onChangeText={setVehicleNumber}
        /> */}

        {/* <TextInput
          style={styles.input}
          placeholder="Vehicle Model"
          value={vehicleModel}
          onChangeText={setVehicleModel}
        />

        <TextInput
          style={styles.input}
          placeholder="Vehicle Registration Number"
          value={vehicleRegistration}
          onChangeText={setVehicleRegistration}
        /> */}

        {/* <TextInput
          style={styles.input}
          placeholder="Insurance Policy Number"
          value={insuranceNumber}
          onChangeText={setInsuranceNumber}
        />

        <TextInput
          style={styles.input}
          placeholder="Insurance Expiry Date"
          value={insuranceExpiry}
          onChangeText={setInsuranceExpiry}
        /> */}

        <Button title="Submit" onPress={handleFormSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99cc66',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFF00',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FEA034',
    borderRadius: 4,
    backgroundColor: '#FF7300',
  },
  photoButton: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FEA034',
    borderRadius: 4,
    backgroundColor: '#FF7300',
    alignItems: 'center',
  },
  photoButtonText: {
    color: '#fff',
  },
  photo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 50,
  },
});

export default DriverRegistrationForm;
