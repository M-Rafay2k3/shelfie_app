import { TextInput,useColorScheme} from 'react-native'
import React from 'react'
import {TextInputProps, StyleProp, TextStyle} from 'react-native'
import {Colors} from '../constants/Colors'

interface ThemedTextInputProps extends TextInputProps{
    style?: StyleProp<TextStyle>,
}

const ThemedTextInput = ({style, ...props} : ThemedTextInputProps) => {
    const colorscheme = useColorScheme();
    const theme = Colors[colorscheme as 'light' | 'dark'] ?? Colors.light;

    return (
        <TextInput style = {[
            {
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 20,
                borderRadius: 6,
            },
            style
        ]} {...props}/>
    )
}
export default ThemedTextInput

