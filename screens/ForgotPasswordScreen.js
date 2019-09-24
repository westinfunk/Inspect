import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Styles from '../constants/Styles';
import { Button, Input, Card} from 'react-native-elements';

const EmailInput = props => <Input placeholder="Email" label="Email" {...props} />
const SubmitButton = props => <Button raised title="Reset Password" />

export default class ForgotPasswordScreen extends Component {
    render() {
        return (
            <ScrollView style={Styles.container}>
                <Card title="Forgot Password">
                    <EmailInput />
                    <SubmitButton />
                </Card>
            </ScrollView>
        )
    }

}
