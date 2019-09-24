import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const AuthStack = createStackNavigator(
    {
        Login: LoginScreen,
        Signup: SignupScreen,
        ForgotPassword: ForgotPasswordScreen
    },
    {
        initialRouteName: 'Login'
    }

)

export default AuthStack;