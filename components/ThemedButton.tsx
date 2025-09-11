import {Pressable, StyleSheet, Text, PressableProps, ViewStyle} from "react-native";
import {Colors} from "../constants/Colors";

interface ThemedButtonProps extends PressableProps{
    style?: ViewStyle | ViewStyle[],
}

function ThemedButton({style,...props} : ThemedButtonProps) {
    return(
    <Pressable
        style={({pressed}) => [styles.btn, pressed && styles.pressed]}
        {...props}
/>
    );
}
const styles =  StyleSheet.create({
    btn: {backgroundColor: Colors.primary,padding: 15, borderRadius: 5},
    pressed: {opacity: 0.8},
})
export default ThemedButton