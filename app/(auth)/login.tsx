import {Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import {Link} from 'expo-router'
import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"
import ThemedLogo from "../../components/ThemedLogo"
import Spacer from "../../components/Spacer"
import {Colors} from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import {useState} from "react";
import {useUser} from "../../hooks/useUser";
import{UserContext} from "../../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const {user} = useUser();

    const handleSubmit = () => {
        console.log('register form submitted',email,password);
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
     <ThemedView style = {styles.container}>

         <ThemedText style = {styles.title} title = {true}>
             Login To Your Account
         </ThemedText>

         <ThemedTextInput
             placeholder  = 'Email'
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

         <ThemedButton onPress = {handleSubmit}>
             <Text style = {{color:'#f2f2f2'}}>Login</Text>
         </ThemedButton>

         <Spacer height={100} />

         <Link href = '/register'>
             <ThemedText style={{ textAlign : 'center'}}>
                 Register Instead
             </ThemedText>
         </Link>

     </ThemedView>
        </TouchableWithoutFeedback>
    )
}
export default Login
const styles = StyleSheet.create({

    container: {flex: 1, justifyContent: "center",alignItems: 'center'},
    title: {textAlign: "center", fontSize: 18, marginBottom: 30},
})
