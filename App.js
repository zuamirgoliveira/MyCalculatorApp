/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Display from './components/Display';

const App = () => {
  const [numbers, setNumbers] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Display numbers={numbers} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
