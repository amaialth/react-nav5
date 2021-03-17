import React from 'react';
import AuthForm from '../components/AuthForm';

const SigninScreen = ({navigation}) => {
    return <AuthForm 
    screenTitle="Sign In"
    onButtonPress={()=> navigation.navigate('Signup')}/>;
};

export default SigninScreen;