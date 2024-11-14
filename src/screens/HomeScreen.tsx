import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* align item center will make the button to be in center */}
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>To take a Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>To go for a Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainView: {alignItems: 'center'},
});
