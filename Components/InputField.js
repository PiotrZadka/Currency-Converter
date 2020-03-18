import React from 'react'
import { TextInput, StyleSheet } from 'react-native'; 

const InputField = ({ placeholder, editable, getValue }) =>{

    const handleTextChange = ( value ) =>{
        getValue(value)
    }

    return(
        <TextInput 
            style = {styles.inputtext}
            placeholder = {placeholder}
            editable = {editable}
            onChangeText = {handleTextChange}
        />
    )
}

const styles = StyleSheet.create({
    inputtext: {
        width: 200, 
        height: 40, 
        borderColor: 'black', 
        borderWidth: 0.5,  
        fontSize: 20
    },
});

export default InputField

