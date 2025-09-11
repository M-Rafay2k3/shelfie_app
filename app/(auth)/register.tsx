import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import {Link} from 'expo-router'
import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import ThemedLogo from "../../components/ThemedLogo"
import Spacer from "../../components/Spacer"
import ThemedButton from "../../components/ThemedButton";
import {useState} from "react";
import ThemedTextInput from "../../components/ThemedTextInput";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <ThemedView style = {styles.container}>
            <ThemedText style = {styles.title} title = {true}>
                Register For An Account
            </ThemedText>

            <ThemedTextInput
                placeholder = 'Email'
                keyboardType = 'email-address'
                style = {{width : '80%',marginBottom:20}}
                onChangeText = {setEmail}
                value = {email}
            />
            <ThemedTextInput
                placeholder = 'Password'
                style = {{width : '80%',marginBottom:20}}
                keyboardType = 'default'
                onChangeText = {setPassword}
                value = {password}
                secureTextEntry
            />

            <ThemedButton>
                <Text style = {{color:'#f2f2f2'}}>Register</Text>
            </ThemedButton>

            <Spacer height={100} />

            <Link href = '/login'>
                <ThemedText style={{ textAlign : 'center'}}>
                    Login Instead
                </ThemedText>
            </Link>

        </ThemedView>
        </TouchableWithoutFeedback>
    )
}
export default Register
const styles = StyleSheet.create({

    container: {flex: 1, justifyContent: "center",alignItems: 'center'},
    title: {textAlign: "center", fontSize: 18, marginBottom: 30},

})
