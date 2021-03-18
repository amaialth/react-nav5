import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import StackHeader from './util/StackHeader';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () =>{
    return (
        <AuthStack.Navigator
            initialRouteName="Signup"
            headerMode="screen"
            screenOptions={{
               header:({scene,navigation})=>(
                   <StackHeader scene={scene} navigation={navigation}/>
               )
            
            }}
        >
            <AuthStack.Screen
                name="Signin"
                component={SigninScreen}
                options={
                    {headerTitle: "Sign In"}
                }/>
            <AuthStack.Screen
                name="Signup"
                component={SignupScreen}
                options={
                    {headerTitle: "Sign Up"}
                }/>
        </AuthStack.Navigator>
    );

}

export default AuthStackNavigator;