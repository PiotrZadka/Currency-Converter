import React from 'react'
import { Button, View, StyleSheet, Alert } from 'react-native';

const ConvertButton = ({ title }) =>{

    const handlePress = () =>{
        Alert.alert(
            'Message',
            'Acknowledge the message',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }

    return(
        <View style={ styles.button }>
            <Button title={title} onPress={ handlePress }></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200
    },
});



export default ConvertButton