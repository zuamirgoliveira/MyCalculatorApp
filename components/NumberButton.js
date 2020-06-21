import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const NumberButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={styles.touchableOpacity}>
      <Text>{props.number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 80,
    margin: 2,
    borderRadius: 30,
    backgroundColor: 'powderblue',
  },
});

export default NumberButton;
