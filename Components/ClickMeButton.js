import React from 'react'
import { Button, Alert } from 'react-native';

const ShowError = () => {
    Alert.alert(
        'Hello',
        'This is sample message',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
}

const ClickMeButton = () =>{
    return(
        <Button title={"Click me!"} onPress={ShowError} ></Button>
    )
}

export default ClickMeButton