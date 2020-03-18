import React, { useState } from 'react';
import {Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import ConvertButton from './Components/ConvertButton'
import InputField from './Components/InputField'

export default function App() {

  const [ currencyValue, setCurrencyValue ] = useState()

  const getValue = (value) =>{
    setCurrencyValue(value)
  }

  return (
    <View style={styles.container}>
      <Text style = {{height: 40, fontSize: 20}} >{"Currency Converter"}</Text>
      <InputField placeholder = {"Currency"} getValue = { getValue }/>
      <ConvertButton title={"Convert"} currencyValue = { currencyValue }/>
      <InputField placeholder = {"Converted"} editable = { false }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ConvertButton.propTypes = {
  title: PropTypes.string
}