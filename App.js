/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import Display from './components/Display';

import NumberButton from './components/NumberButton';
import OperationButton from './components/OperationButton';

const App = () => {
  const [numerador, setNumerador] = useState('');
  const [denominador, setdenominador] = useState('');
  const [operador, setOperador] = useState('');

  const setNumber = e => {
    if (operador === '') {
      setNumerador(numerador + e);
    } else {
      setdenominador(denominador + e);
    }
  };

  const clear = () => {
    setNumerador('');
    setdenominador('');
    setOperador('');
  };

  const validarOperador = e => {
    if (numerador !== '' && operador === '') {
      setOperador(e);
    }
  };

  const negate = () => {
    setNumerador(parseFloat(numerador) * parseFloat('-1'));
  };

  const percent = () => {
    if (numerador !== undefined && numerador !== '') {
      setNumerador(parseFloat(numerador) / 100);
    }
  };

  const result = () => {
    switch (operador) {
      case '+':
        setNumerador(parseFloat(numerador) + parseFloat(denominador));
        break;
      case '-':
        setNumerador(parseFloat(numerador) - parseFloat(denominador));
        break;
      case 'x':
        setNumerador(parseFloat(numerador) * parseFloat(denominador));
        break;
      case '/':
        setNumerador(parseFloat(numerador) / parseFloat(denominador));
        break;
    }
    setdenominador('');
    setOperador('');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Display numbers={numerador + operador + denominador + '|'} />

        <View style={{flex: 1}}>
          <View style={{flex: 1, direction: 'row'}}>
            <OperationButton operation={'C'} onPress={() => clear()} />
            <OperationButton operation={'( )'} onPress={() => clear()} />
            <OperationButton operation={'%'} onPress={() => percent()} />
            <OperationButton
              operation={'/'}
              onPress={() => validarOperador('/')}
            />
          </View>

          <View style={{flex: 1, direction: 'row'}}>
            <NumberButton number={'7'} onPress={() => setNumber(7)} />
            <NumberButton number={'8'} onPress={() => setNumber(8)} />
            <NumberButton number={'9'} onPress={() => setNumber(9)} />
            <OperationButton
              operation={'X'}
              onPress={() => validarOperador('x')}
            />
          </View>

          <View style={{flex: 1, direction: 'row'}}>
            <NumberButton number={'4'} onPress={() => setNumber(4)} />
            <NumberButton number={'5'} onPress={() => setNumber(3)} />
            <NumberButton number={'6'} onPress={() => setNumber(2)} />
            <OperationButton
              operation={'-'}
              onPress={() => validarOperador('-')}
            />
          </View>

          <View style={{flex: 1, direction: 'row'}}>
            <NumberButton number={'1'} onPress={() => setNumber(1)} />
            <NumberButton number={'2'} onPress={() => setNumber(2)} />
            <NumberButton number={'3'} onPress={() => setNumber(3)} />
            <OperationButton
              operation={'+'}
              onPress={() => validarOperador('+')}
            />
          </View>

          <View style={{flex: 1, direction: 'row'}}>
            <OperationButton operation={'+/-'} onPress={() => negate()} />
            <NumberButton number={'0'} onPress={() => setNumber(2)} />
            <NumberButton number={'.'} onPress={() => setNumber(3)} />
            <OperationButton operation={'='} onPress={() => result()} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
