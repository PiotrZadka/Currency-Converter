import React from 'react'
import { Button, View, StyleSheet, Alert } from 'react-native';

const ConvertButton = ({ title, currencyValue }) =>{

    const handlePress = () =>{
        console.log(currencyValue)
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