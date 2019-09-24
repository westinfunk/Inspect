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
    constructor(props) {
        super(props)

        this.state = {
            nameInput: "",
            emailInput: "",
            companyInput: "",
            passwordInput: "",
            confirmPasswordInput: "",
        }

        this._handleChangeNameText = this._handleChangeNameText.bind(this)
        this._handleChangeEmailText = this._handleChangeEmailText.bind(this)
        this._handleChangeCompanyText = this._handleChangeCompanyText.bind(this)
        this._handleChangePasswordText = this._handleChangePasswordText.bind(this)
        this._handleChangeConfirmPasswordText = this._handleChangeConfirmPasswordText.bind(this)
        this._handleSubmitButtonPressed = this._handleSubmitButtonPressed.bind(this)
    }

    _handleChangeNameText(value) {
        this.setState({nameInput: value})
    }

    _handleChangeEmailText(value) {
        this.setState({emailInput: value})
    }

    _handleChangeCompanyText(value) {
        this.setState({companyInput: value})
    }

    _handleChangePasswordText(value) {
        this.setState({passwordInput: value})
    }

    _handleChangeConfirmPasswordText(value) {
        this.setState({confirmPasswordInput: value})
    }

    _handleSubmitButtonPressed() {
        console.log("pressed")
    }

    render() {
        return (
            <ScrollView style={Styles.container}>
                <Card title="Signup">
                    <NameInput value={this.state.nameInput} onChangeText={this._handleChangeNameText}/>
                    <EmailInput value={this.state.emailInput} onChangeText={this._handleChangeEmailText}/>
                    <CompanyInput value={this.state.companyInput} onChangeText={this._handleChangeCompanyText}/>
                    <PasswordInput value={this.state.passwordInput} onChangeText={this._handleChangePasswordText}/>
                    <PasswordConfirm value={this.state.confirmPasswordInput} onChangeText={this._handleChangeConfirmPasswordText}/>
                    <SubmitButton onPress={console.log("pressed")}/>
                </Card>
            </ScrollView>
        )
    }

}
