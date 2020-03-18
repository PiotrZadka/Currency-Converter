import React from 'react'
import { TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const InputField = ({ placeholder }) =>{
    return(
        <TextInput 
            style={{
                width: 200, 
                height: 40, 
                borderColor: 'black', 
                borderWidth: 0.5,  
                fontSize: 20
            }}
            placeholder = {placeholder}
        />
    )
}

export default InputField