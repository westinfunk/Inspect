import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Styles from '../constants/Styles';
import { Button, Input, Card} from 'react-native-elements';

const NameInput = props => <Input placeholder="Name" label="Name" {...props} />
const EmailInput = props => <Input placeholder="Email" label="Email" {...props} />
const CompanyInput = props => <Input placeholder="Company Name (if applicable)" label="Company Name" {...props}/>
const PasswordInput = props => <Input label="Password" secureTextEntry {...props}/>
const PasswordConfirm = props => <Input label="Confirm Password" secureTextEntry {...props} />

const SubmitButton = props => <Button  title="Submit" buttonStyle={Styles.buttonLarge} {...props}/>

export default class SignupScreen extends Component {

    state = {
        name: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: "",
    }

    updateName = name => {
        this.setState({ name })
    }

    updateEmail = email => {
        this.setState({ email })
    }

    updateCompany = company => {
        this.setState({ company })
    }

    updatePassword = password => {
        this.setState({ password })
    }

    updateConfirmPassword = confirmPassword => {
        this.setState({ confirmPassword })
    }

    submitForm = () => {
        console.log(this.state)
    }

    render() {
        return (
            <ScrollView style={Styles.container}>
                <Card title="Signup">
                    <NameInput value={this.state.name} onChangeText={this.updateName}/>
                    <EmailInput value={this.state.email} onChangeText={this.updateEmail}/>
                    <CompanyInput value={this.state.company} onChangeText={this.updateCompany}/>
                    <PasswordInput value={this.state.password} onChangeText={this.updatePassword}/>
                    <PasswordConfirm value={this.state.confirmPassword} onChangeText={this.updateConfirmPassword}/>
                    <SubmitButton onPress={this.submitForm}/>
                </Card>
            </ScrollView>
        )
    }

}
