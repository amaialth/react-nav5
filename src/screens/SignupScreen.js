import React, {useState} from 'react';

import AuthForm from '../components/AuthForm';
const SignupScreen = ({ navigation }) => {
    return <AuthForm 
                screenTitle="Sign Up"
                onButtonPress={()=> navigation.navigate('Signin')}/>;
};


export default SignupScreen;