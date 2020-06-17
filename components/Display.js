import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Display = props => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>{props.numbers}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginRight: 15,
  },
});

export default Display;
