import React, { Component } from 'react';
import { header } from '../constants/Styles';
import SaveHeaderButton from '../components/SaveHeaderButton';
import { getAccount } from '../model/Account';
import { Input, Card } from 'react-native-elements';

export default class EditProfileScreen extends Component {
    static nevigationOptions = {
        headerTitle: "Edit",
        headerRight: <SaveHeaderButton onPress = { ()=> console.log("pressed save")} />,
        ...header
    }

    state = {
        company: "",
        name: "",
        address: "",
        city: "",
        state: "",
        email: ""
    }

    async componentDidMount() {
        const accountId = 328;
        const account = await getAccount(accountId);
        this.setState({ 
            company: account.company,
            name: account.name,
            address: account.address,
            city: account.city,
            state: account.state,
            email: account.email
        });
    }

    handleChangeCompany(company) {
        this.setState({
            company
        })
    }

    render() {
        return (
            <Card title={ "Account Details" }>
                <Input label="Company Name" value={this.state.company} onChangeText={this.handleChangeCompany.bind(this)}/>
            </Card>
        )
    }
}