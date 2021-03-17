import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
const AuthForm = ({ screenTitle, onButtonPress }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return <View style={styles.container}>
        <Text style={styles.textStyle}>{screenTitle}</Text>
        <TextInput
            label="Username"
            value={username}
            onChangeText={text=> setUsername(text)}
            />
        <TextInput
            label="password"
            value={password}
            secureTextEntry
            onChangeText={text=> setPassword(text)}
            />
    <Button mode="contained" onPress={() => onButtonPress()}>{screenTitle}</Button>
</View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textStyle:{
        textAlign:'center',
        fontSize: 20,
        letterSpacing: 2
    }
})

export default AuthForm;