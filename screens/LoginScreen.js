import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Styles from '../constants/Styles';
import { Button, Input, Card} from 'react-native-elements';


const LoginButton = props => <Button raised title="Login" />
const SignupButton = props => <Button title="Quick Signup" type="outline" />
const ForgotPasswordButton = props => <Button title="Forgot Password?" type="outline"/>

const EmailInput = props => <Input placeholder="Email" {...props} />
const PasswordInput = props => <Input placeholder="Password" secureTextEntry {...props} />

export default class LoginScreen extends Component {
    render() {
        return (
            <ScrollView style={Styles.container}>
                <Card title="Modern Inspect Pro">
                    <EmailInput />
                    <PasswordInput />
                    <LoginButton />
                    <SignupButton />
                    <ForgotPasswordButton />
                </Card>
            </ScrollView>
        )
    }

}
